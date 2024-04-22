<script setup>
import { ref } from 'vue'
import { 
  MDBBtn,
  MDBFile,
} from "mdb-vue-ui-kit";
import { open as openSHP } from 'shapefile'
import path from "path-browserify";

const files1 = ref([]);

function loadSHPfiles(event){
  const fReader = new FileReader();
  
  // 將多筆檔案建立成list表
  let inputList = {};
  // 取得多筆實體檔案
  let filelist = event.target.files;
  // 計算所選檔案數量
  let file_count = filelist.length;
  
  let shpList=[];
  let shpCount=0;
  // 逐筆檢查檔案
  for (let i=0; i < file_count ; i++){
    let currentFile = filelist[i];
      console.log(filelist[i]);
    let fileparse = path.parse(currentFile.name);
      console.log(fileparse);
    let fileName = fileparse.name;
    let fileExt =  (fileparse.ext).toLowerCase();
    
    // 以檔名作為物件屬性名稱，下放shp 及 dbf file實體
    // {filname: {shp:... , def:... }, nextfile... }
    if(!inputList[fileName]){
      inputList[fileName]={
        shp: null,
        dbf: null,
      }
    }

    if(fileExt === '.shp'){
      inputList[fileName].shp = filelist[i];
    }else if(fileExt === '.dbf'){
      inputList[fileName].dbf = filelist[i];
    }
  }
  console.log(inputList);
  // 計算所選SHP數量
  shpList = Object.keys(inputList);
  shpCount = shpList.length
  console.log(shpCount);

  // 讀取每個shp
  let shpFileData=[];
  for (let i=0; i<shpCount; i++ ){
    // 載入shp
    let reader_shp = new FileReader();
    let shpBuffer;
    // 載入dbf
    let reader_dbf = new FileReader();
    let dbfBuffer

    reader_shp.onload = function(e) {
      shpBuffer = e.target.result;
      reader_dbf.onload = function(e) {
        dbfBuffer = e.target.result;

        let geoJson = openSHP(shpBuffer, dbfBuffer, {encoding: 'Big5'})
          .then(source => source.read()
            .then(function log(result) {
              if (result.done) { 
                console.log(shpFileData);
                saveGML(shpFileData);
                return;
              }
              shpFileData.push(result.value);
              return source.read().then(log);
            })
          )
        .catch(error => console.error(error.stack));
      }
      reader_dbf.readAsArrayBuffer(inputList[shpList[i]].dbf);
    }
    reader_shp.readAsArrayBuffer(inputList[shpList[i]].shp);
  
    
    
  }

  // 匯出GML
  function saveGML(data){

    // 電桿格式
    // let schema = {
    //   header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
    //   type: 'UTL_電桿',
    //   colume: [
    //     '類別碼',
    //     '識別碼',
    //     '管理單位',
    //     '作業區分',
    //     '設置日期',
    //     '電桿編號',
    //     '長度',
    //     '材質',
    //     '使用狀態',
    //     '資料狀態',
    //     '備註'
    //   ]
    // }
    // 其他設施格式
    let schema = {
      header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
      type: 'UTL_其他設施',
      colume: [
        '類別碼',
        '識別碼',
        '管理單位',
        '作業區分',
        '設置日期',
        '設施編號',
        '設施名稱',
        '設施長度',
        '設施寬度',
        '設施高度',
        '設施型態',
        '使用狀態',
        '資料狀態',
        '備註'
      ]
    }

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
      dataStr = dataStr + '        <' + schema.type + '>\n';
      dataStr = dataStr + '            <geometry>\n';
      dataStr = dataStr + '                <gml:Point srsName="EPSG:3826" srsDimension="2">\n';
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
      dataStr = dataStr + '                </gml:Point>\n';
      dataStr = dataStr + '            </geometry>\n';
      console.log(dataStr)
      // 屬性資訊
      let attribute = refData[i].properties
      console.log(attribute)

      for(let j=0;j<schema.colume.length;j++){
        if(schema.colume[j]==='設置日期'){
          if(attribute[schema.colume[j]]){
            let formatDate = 
              attribute[schema.colume[j]].getFullYear() + '-' + 
              String(attribute[schema.colume[j]].getMonth()+1).padStart(2, "0") + '-' + 
              String(attribute[schema.colume[j]].getDate()).padStart(2, "0");

            dataStr = dataStr + '            <' + schema.colume[j] + '>\n';
            dataStr = dataStr + '                <gml:TimeInstant>\n';
            dataStr = dataStr + '                    <gml:timePosition>' + formatDate + '</gml:timePosition>\n';
            dataStr = dataStr + '                </gml:TimeInstant>\n';
            dataStr = dataStr + '            </' + schema.colume[j] + '>\n';

          }else{
            dataStr = dataStr +'            <' + schema.colume[j] + '/>\n'
          }
        }else if(schema.colume[j]==='備註'){
          if(attribute[schema.colume[j]] || attribute[schema.colume[j]]===0){
            dataStr = dataStr + '            <' + schema.colume[j] + '>' + attribute[schema.colume[j]] +'</'+schema.colume[j]+'>\n'
          }else{
            dataStr = dataStr +'            <' + schema.colume[j] + '/>\n'
          }
        }else{
          if(attribute[schema.colume[j]] || attribute[schema.colume[j]]===0){
            dataStr = dataStr + '            <' + schema.colume[j] + '>' + attribute[schema.colume[j]] +'</'+schema.colume[j]+'>\n'
          }else{
            dataStr = dataStr + '            <' + schema.colume[j] + '>0</'+schema.colume[j]+'>\n'
          }
        }
      }

      // 紀錄標尾
      dataStr = dataStr + '        </' + schema.type + '>\n';
      dataStr = dataStr + '    </gml:featureMember>\n';
    }
    // console.log('dataStr',dataStr);

    // 填入檔尾
    dataStr = dataStr + '</UTL>\n';

    console.log(dataStr)
    //藉型別陣列建構的 blob 來建立 URL
    let fileName = "export.gml";
    // 添加BOM讓Excel可以判斷編碼
    let blob = new Blob([dataStr], {
      type: "application/octet-stream",
    });
    let href = URL.createObjectURL(blob);
    // 從 Blob 取出資料
    let link = document.createElement("a");
    document.body.appendChild(link);
    link.href = href;
    link.download = fileName;
    link.click();
    document.body.removeChild(link);
  }
}

</script>

<template>
  <MDBFile 
    multiple
    v-model="files1" 
    label="Default file input example" 
    accept=".shp, .dbf, prj" 
    @change="loadSHPfiles($event)"/>
</template>