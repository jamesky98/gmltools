<script setup>
import { ref } from 'vue';
import { computed } from "@vue/reactivity";
import { 
  MDBBtn,
  MDBFile,
  MDBSelect,
} from "mdb-vue-ui-kit";
import { open as openSHP } from 'shapefile'
import path from "path-browserify";
import { schemalist } from "../metheods/gml_schema"

// 參數
  const files1 = ref([]);
  const selectSchema = ref('');
  const selectSchemaMU = computed(() => {
    let selectlist=[];
    selectlist.push({text: "-未選取-", value: -1})
    for (let i=0;i<schemalist.length;i++){
      selectlist.push({text: schemalist[i].tag, value: i})
    }
    return selectlist
  });
  const selectSchemaDOM = ref();

// 函式
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
      // console.log(filelist[i]);
    let fileparse = path.parse(currentFile.name);
      // console.log(fileparse);
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
  // console.log(inputList);
  // 計算所選SHP數量
  shpList = Object.keys(inputList);
  shpCount = shpList.length
  // console.log(shpCount);

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
                // console.log(shpFileData);
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
    let schema = schemalist[selectSchema.value]
    // console.log('schema',schema);

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
      dataStr = dataStr + '                </gml:Point>\n';
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
  <MDBSelect 
    label="選擇類型" 
    class="mb-3"
    v-model:options="selectSchemaMU"
    v-model:selected="selectSchema" 
    ref="selectSchemaDOM" />
  <MDBFile 
    multiple
    v-model="files1" 
    label="選擇shape file(請同時選擇.shp 及 .dbf)" 
    accept=".shp, .dbf, prj" 
    @change="loadSHPfiles($event)"/>
</template>