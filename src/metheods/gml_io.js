// 匯出GML
function dataToGML(shpdata, schema, callbakMsg){
  return new Promise((resolve,reject)=>{
    let rowdata = shpdata.rowdata;
    // console.log('rowdata',rowdata);
    let filename = shpdata.filename;
    // console.log('filename',filename);
    let csr = shpdata.csr;
    // console.log('csr',csr);

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
      dataStr = dataStr + '            <geometry>\n';

      // 判斷幾何的維度
      let dimension=0;
      if(refData[i].geometry.coordinates.length % 2){
        dimension=2;
      }else if(refData[i].geometry.coordinates.length % 3 ){
        dimension=3;
      }

      dataStr = dataStr + '                <gml:' + schema.type + ' srsName="'+csr+'" srsDimension="'+ dimension +'">\n';
      dataStr = dataStr + '                    <gml:coordinates>';
      // 幾何資訊
      let pointlist=[];
      if(refData[i].geometry.type === 'Point'){
        pointlist.push(refData[i].geometry.coordinates)
      }else{
        pointlist = refData[i].geometry.coordinates;
      }
      
      for (let j=0; j < pointlist.length; j++){
        if(j!==0){dataStr = dataStr + ' ' }
        dataStr = dataStr + pointlist[j][0] + ' ' + pointlist[j][1]
      }
      dataStr = dataStr + '</gml:coordinates>\n';
      dataStr = dataStr + '                </gml:' + schema.type + '>\n';
      dataStr = dataStr + '            </geometry>\n';
      // console.log(dataStr)
      // 屬性資訊
      let attribute = refData[i].properties
      // console.log('attribute',attribute);
      // console.log('schema.colume',schema.colume);
      for(let j=0;j<schema.colume.length;j++){
        if(schema.colume[j][2]==='date'){
          // 型態為日期
          if(attribute[schema.colume[j][0]]){
            let dateContent = attribute[schema.colume[j][0]];
            // 有資料
            // 核對資料型態
            if(!(dateContent instanceof Date)){
              dateContent = new Date(dateContent);
              if(isNaN(dateContent)){
                callbakMsg.mainMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schema.colume[j][0] + ']欄位型態錯誤，以[1901-01-01]代替')
                callbakMsg.subMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schema.colume[j][0] + ']欄位型態錯誤，以[1901-01-01]代替')
                dataStr = dataStr + '            <' + schema.colume[j][0] + '>1901-01-01</'+schema.colume[j][0] + '>\n'    
                continue;
              }
            }
            
            let formatDate = 
              dateContent.getFullYear() + '-' + 
              String(dateContent.getMonth()+1).padStart(2, "0") + '-' + 
              String(dateContent.getDate()).padStart(2, "0");

            dataStr = dataStr + '            <' + schema.colume[j][0] + '>\n';
            dataStr = dataStr + '                <gml:TimeInstant>\n';
            dataStr = dataStr + '                    <gml:timePosition>' + formatDate + '</gml:timePosition>\n';
            dataStr = dataStr + '                </gml:TimeInstant>\n';
            dataStr = dataStr + '            </' + schema.colume[j][0] + '>\n';

          }else if(schema.colume[j][1]==='O'){
            // 選填項目則空欄
            dataStr = dataStr +'            <' + schema.colume[j][0] + '/>\n'
          }else{
            // 必填項目
            // 拋出錯誤:應為必填欄位
            // 下方為暫時處理措施
            callbakMsg.mainMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schema.colume[j][0] + ']欄位應為必填資料，查無內容以[1901-01-01]代替')
            callbakMsg.subMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schema.colume[j][0] + ']欄位應為必填資料，查無內容以[1901-01-01]代替')
            dataStr = dataStr + '            <' + schema.colume[j][0] + '>1901-01-01</'+schema.colume[j][0] + '>\n'
          }
        }else if(schema.colume[j][1]==='O'){
          // 選填項目
          if(attribute[schema.colume[j][0]] || attribute[schema.colume[j][0]]===0){
            // 有內容
            // 核對資料型態
            if(checkType(schema.colume[j][2],attribute[schema.colume[j][0]])){
              dataStr = dataStr + '            <' + schema.colume[j][0] + '>' + attribute[schema.colume[j][0]] +'</'+schema.colume[j][0] +'>\n'
            }else{
              callbakMsg.mainMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schema.colume[j][0] + ']欄位型態錯誤，以0代替');
              callbakMsg.subMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schema.colume[j][0] + ']欄位型態錯誤，以0代替');
              dataStr = dataStr + '            <' + schema.colume[j][0] + '>0</'+schema.colume[j][0] +'>\n'
            }
            
          }else{
            // 無內容
            dataStr = dataStr +'            <' + schema.colume[j][0] + '/>\n'
          }
        }else if(schema.colume[j][1]==='M'){
          // 必填項目
          if(attribute[schema.colume[j][0]] || attribute[schema.colume[j][0]]===0){
            // 有內容
            // 核對資料型態
            if(checkType(schema.colume[j][2],attribute[schema.colume[j][0]])){
              dataStr = dataStr + '            <' + schema.colume[j][0] + '>' + attribute[schema.colume[j][0]] +'</'+schema.colume[j][0] +'>\n'
            }else{
              callbakMsg.mainMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schema.colume[j][0] + ']欄位型態錯誤，以0代替');
              callbakMsg.subMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schema.colume[j][0] + ']欄位型態錯誤，以0代替');
              dataStr = dataStr + '            <' + schema.colume[j][0] + '>0</'+schema.colume[j][0] +'>\n'
            }
          }else{
            // 無內容
            // 拋出錯誤:應為必填欄位
            // 下方為暫時處理措施
            callbakMsg.mainMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schema.colume[j][0] + ']欄位應為必填資料，查無內容以0代替')
            callbakMsg.subMsg.push('[錯誤] '+ filename +' 中第'+ i +'筆資料[' + schema.colume[j][0] + ']欄位應為必填資料，查無內容以0代替')
            dataStr = dataStr + '            <' + schema.colume[j][0] + '>0</'+schema.colume[j][0]+'>\n'
          }
        }
      }

      // 紀錄標尾
      dataStr = dataStr + '        </' + schema.tag + '>\n';
      dataStr = dataStr + '    </gml:featureMember>\n';
    }
    // 填入檔尾
    dataStr = dataStr + '</UTL>\n';

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



export { 
  dataToGML
};