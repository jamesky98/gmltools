// 匯出GML
function dataToGML(shpdata, schema, callbakMsg){
  return new Promise((resolve,reject)=>{
    let digpos = 3;
    let rowdata = shpdata.rowdata;
    // console.log('rowdata',rowdata);
    let filename = shpdata.filename;
    // console.log('filename',filename);
    let csr = shpdata.csr;
    // console.log('csr',csr);
    // console.log('schema',schema)

    // data沒有資料
    if(!(rowdata && rowdata.length>0)){
      callbakMsg.mainMsg.push('[警告] '+filename+' 檔內無資料!!');
      callbakMsg.subMsg.push('[警告] '+filename+' 檔內無資料!!');
      return null
    }

    // 判斷幾何型態是否正確
    let schemaType = schema.type;
    // console.log('schemaType',schemaType);
    
    let dataType = rowdata[0].geometry.type;
    // console.log('dataType',dataType);

    if(schemaType !== dataType){
      // console.log('型態不符');
      callbakMsg.mainMsg.push('[錯誤] '+filename+' 與schema型態不符')
      callbakMsg.subMsg.push('[錯誤] '+filename+' 與schema型態不符')
      return null
    }

    let dataStr = '';
    let refData = rowdata;
    
    // console.log('refData',refData);  
    // console.log('schema',schema);   
    // 填入檔頭
    dataStr = dataStr + '<?xml version="1.0" encoding="utf-8"?>\n' +
      schema.header;
    // 填入資料
    for (let i = 0; i < refData.length; i++) {
      // 紀錄標頭
      dataStr = dataStr + '    <gml:featureMember>\n';
      dataStr = dataStr + '        <' + schema.tag + '>\n';
      
      // 幾何資訊
      let pointlist=[];
      let dimension=0;

      

      if(refData[i].geometry.type === 'Point'){
        pointlist.push(refData[i].geometry.coordinates)

        // console.log('pointlist',pointlist)

        if(refData[i].geometry.coordinates.length === 2){
          dimension=2;
        }else {
          dimension=3;
        }
      }else{
        pointlist = refData[i].geometry.coordinates;
        // 判斷幾何的維度
        
        // console.log('pointlist',pointlist)

        if(refData[i].geometry.coordinates[0].length === 2){
          dimension=2;
        }else{
          dimension=3;
        }
      }
      
      dataStr = dataStr + '            <geometry>\n';
      dataStr = dataStr + '                <gml:' + schema.type + ' srsName="'+csr+'" srsDimension="'+ dimension +'">\n';

      if(refData[i].geometry.type === 'Point'){
        dataStr = dataStr + '                    <gml:coordinates>';
      }else{
        dataStr = dataStr + '                    <gml:posList>';
      }
      
      for (let j=0; j < pointlist.length; j++){
        if(j!==0){dataStr = dataStr + ' ' }

        if(dimension===2){
          dataStr = dataStr + roundNum(pointlist[j][0],digpos) + ' ' + roundNum(pointlist[j][1],digpos) // + ' ' + 0.0
        }else{
          dataStr = dataStr + roundNum(pointlist[j][0],digpos) + ' ' + roundNum(pointlist[j][1],digpos) + ' ' + roundNum(pointlist[j][2],digpos)
        }
        
      }
      if(refData[i].geometry.type === 'Point'){
        dataStr = dataStr + '</gml:coordinates>\n';
      }else{
        dataStr = dataStr + '</gml:posList>\n';
      }

      dataStr = dataStr + '                </gml:' + schema.type + '>\n';
      dataStr = dataStr + '            </geometry>\n';
      // console.log(dataStr)
      // 屬性資訊
      let attribute = refData[i].properties
      // console.log('attribute',attribute);
      // console.log('schema.colume',schema.colume);
      for(let j=0;j<schema.colume.length;j++){
        let xlsCheckName = schema.colume[j][0].length>5?schema.colume[j][0].slice(0,5):schema.colume[j][0];
        let schemaFieldName = schema.colume[j][0]

        // console.log('xlsCheckName',xlsCheckName,'schemaFieldName',schemaFieldName)
        if(schema.colume[j][2]==='date'){
          // 型態為日期
          if(attribute[xlsCheckName]){
            let dateContent = attribute[xlsCheckName];
            // 有資料
            // 核對資料型態
            if(!(dateContent instanceof Date)){
              dateContent = new Date(dateContent);
              if(isNaN(dateContent)){
                callbakMsg.mainMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schemaFieldName + ']欄位型態錯誤，以[1901-01-01]代替')
                callbakMsg.subMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schemaFieldName + ']欄位型態錯誤，以[1901-01-01]代替')
                dataStr = dataStr + '            <' + schemaFieldName + '>1901-01-01</'+schemaFieldName + '>\n'    
                continue;
              }
            }
            
            let formatDate = 
              dateContent.getFullYear() + '-' + 
              String(dateContent.getMonth()+1).padStart(2, "0") + '-' + 
              String(dateContent.getDate()).padStart(2, "0");

            dataStr = dataStr + '            <' + schemaFieldName + '>\n';
            dataStr = dataStr + '                <gml:TimeInstant>\n';
            dataStr = dataStr + '                    <gml:timePosition>' + formatDate + '</gml:timePosition>\n';
            dataStr = dataStr + '                </gml:TimeInstant>\n';
            dataStr = dataStr + '            </' + schemaFieldName + '>\n';

          }else if(schema.colume[j][1]==='O'){
            // 選填項目則空欄
            dataStr = dataStr +'            <' + schemaFieldName + '/>\n'
          }else{
            // 必填項目
            // 拋出錯誤:應為必填欄位
            // 下方為暫時處理措施
            callbakMsg.mainMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schemaFieldName + ']欄位應為必填資料，查無內容以[1901-01-01]代替')
            callbakMsg.subMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schemaFieldName + ']欄位應為必填資料，查無內容以[1901-01-01]代替')
            dataStr = dataStr + '            <' + schemaFieldName + '>1901-01-01</'+schemaFieldName + '>\n'
          }
        }else if(schema.colume[j][1]==='O'){
          // 選填項目
          if(attribute[xlsCheckName] || attribute[xlsCheckName]===0){
            // 有內容
            // 核對資料型態
            if(checkType(schema.colume[j][2],attribute[xlsCheckName])){
              dataStr = dataStr + '            <' + schemaFieldName + '>' + attribute[xlsCheckName] +'</'+schemaFieldName +'>\n'
            }else{
              callbakMsg.mainMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schemaFieldName + ']欄位型態錯誤，以0代替');
              callbakMsg.subMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schemaFieldName + ']欄位型態錯誤，以0代替');
              dataStr = dataStr + '            <' + schemaFieldName + '>0</'+schemaFieldName +'>\n'
            }
            
          }else{
            // 無內容
            dataStr = dataStr +'            <' + schemaFieldName + '/>\n'
          }
        }else if(schema.colume[j][1]==='M'){
          
          // 必填項目
          if(attribute[xlsCheckName] || attribute[xlsCheckName]===0){
            // 有內容
            // 核對資料型態
            if(checkType(schema.colume[j][2],attribute[xlsCheckName])){
              dataStr = dataStr + '            <' + schemaFieldName + '>' + attribute[xlsCheckName] +'</'+schemaFieldName +'>\n'
            }else{
              console.log(attribute[xlsCheckName])
              callbakMsg.mainMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schemaFieldName + ']欄位型態錯誤，以0代替');
              callbakMsg.subMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schemaFieldName + ']欄位型態錯誤，以0代替');
              dataStr = dataStr + '            <' + schemaFieldName + '>0</'+schemaFieldName +'>\n'
            }
          }else{
            // 無內容
            // 拋出錯誤:應為必填欄位
            // 下方為暫時處理措施
            callbakMsg.mainMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schemaFieldName + ']欄位應為必填資料，查無內容以0代替')
            callbakMsg.subMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schemaFieldName + ']欄位應為必填資料，查無內容以0代替')
            dataStr = dataStr + '            <' + schemaFieldName + '>0</'+schemaFieldName+'>\n'
          }
        }
      }

      // 紀錄標尾
      dataStr = dataStr + '        </' + schema.tag + '>\n';
      dataStr = dataStr + '    </gml:featureMember>\n';
    }
    // 填入檔尾
    dataStr = dataStr + '</UTL>\n';
    // console.log('dataStr',dataStr)
    resolve(dataStr);
  })
}

function checkType(schemaType, testDate){
  switch(schemaType){
    case 'string':
      if(testDate){
        return true
      }else{
        return false
      }
    case 'number':
      if(isNaN(parseFloat(testDate))){
        return false
      }else{
        return true
      }
  }
}

function roundNum(value, dig){
  let m = Number((Math.abs(value) * (10**dig)).toPrecision(15));
  return Math.round(m) / (10**dig) * Math.sign(value);
}


export { 
  dataToGML
};