<script setup>
import { ref } from 'vue';
import { computed } from "@vue/reactivity";
import { 
  MDBBtn, MDBFile, MDBSelect, MDBDatatable,
} from "mdb-vue-ui-kit";
import path from "path-browserify";
import { schemalist } from "../metheods/gml_schema"
import { dataToGML } from "../metheods/gml_io"
import { loadSHPfile } from "../metheods/shp_io"

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

  const shpTableData = {
    columns: [
      { label: "Name", field: "name" },
      { label: "Position", field: "position" },
      { label: "Office", field: "office" },
      { label: "Contact", field: "contact", sort: false }
    ],
    rows: [
      {
        name: "Tiger Nixon",
        position: "System Architect",
        office: "Edinburgh",
        phone: "+48000000000",
        email: "tiger.nixon@gmail.com"
      },
      {
        name: "Sonya Frost",
        position: "Software Engineer",
        office: "Edinburgh",
        phone: "+53456123456",
        email: "sfrost@gmail.com"
      },
      {
        name: "Tatyana Fitzpatrick",
        position: "Regional Director",
        office: "London",
        phone: "+42123432456",
        email: "tfitz@gmail.com"
      }
    ]
  }
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
  for (let i=0; i<shpCount; i++ ){
    loadSHPfile(inputList[shpList[i]].shp, inputList[shpList[i]].dbf)
    .then(res=>{
      console.log('main',res)
      console.log(selectSchema)
      console.log(schemalist[selectSchema])
      saveGML(res, schemalist[selectSchema])
    })
  }
}

// 匯出GML
function saveGML(data, schema){
  let dataStr = dataToGML(data, schema);

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
  <MDBDatatable 
    :dataset="shpTableData"
    />
</template>