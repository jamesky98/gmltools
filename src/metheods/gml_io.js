// 匯出GML
function dataToGML(data, schema){
  let dataStr = '';
  let refData = data;
  // console.log('refData',refData);    
  // 填入檔頭
  dataStr = dataStr + '<?xml version="1.0" encoding="utf-8"?>\n' +
    schema.header;
  // 填入資料
  for (let i = 0; i < refData.length; i++) {
    // 紀錄標頭
    dataStr = dataStr + '    <gml:featureMember>\n';
    dataStr = dataStr + '        <' + schema.tag + '>\n';
    dataStr = dataStr + '            <geometry>\n';
    dataStr = dataStr + '                <gml:' + schema.type + ' srsName="EPSG:3826" srsDimension="2">\n';
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
    for(let j=0;j<schema.colume.length;j++){
      if(schema.colume[j][2]==='date'){
        if(attribute[schema.colume[j][0]]){
          let formatDate = 
            attribute[schema.colume[j][0]].getFullYear() + '-' + 
            String(attribute[schema.colume[j][0]].getMonth()+1).padStart(2, "0") + '-' + 
            String(attribute[schema.colume[j][0]].getDate()).padStart(2, "0");

          dataStr = dataStr + '            <' + schema.colume[j][0] + '>\n';
          dataStr = dataStr + '                <gml:TimeInstant>\n';
          dataStr = dataStr + '                    <gml:timePosition>' + formatDate + '</gml:timePosition>\n';
          dataStr = dataStr + '                </gml:TimeInstant>\n';
          dataStr = dataStr + '            </' + schema.colume[j][0] + '>\n';

        }else if(schema.colume[j][1]==='O'){
          dataStr = dataStr +'            <' + schema.colume[j][0] + '/>\n'
        }else{
          // 拋出錯誤:應為必填欄位
          // 下方為暫時處理措施
          dataStr = dataStr + '            <' + schema.colume[j][0] + '>1901-01-01</'+schema.colume[j][0] + '>\n'
        }
      }else if(schema.colume[j][1]==='O'){
        if(attribute[schema.colume[j][0]] || attribute[schema.colume[j][0]]===0){
          dataStr = dataStr + '            <' + schema.colume[j][0] + '>' + attribute[schema.colume[j][0]] +'</'+schema.colume[j][0] +'>\n'
        }else{
          dataStr = dataStr +'            <' + schema.colume[j][0] + '/>\n'
        }
      }else if(schema.colume[j][1]==='M'){
        if(attribute[schema.colume[j][0]] || attribute[schema.colume[j][0]]===0){
          dataStr = dataStr + '            <' + schema.colume[j][0] + '>' + attribute[schema.colume[j][0]] +'</'+schema.colume[j][0]+'>\n'
        }else{
          // 拋出錯誤:應為必填欄位
          // 下方為暫時處理措施
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

  return dataStr
}



export { 
  dataToGML
};