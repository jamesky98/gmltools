<script setup>
import { ref, onMounted } from 'vue';
import { computed } from "@vue/reactivity";
import { 
  MDBContainer, MDBRow, MDBCol,
  MDBBtn, MDBFile, MDBSelect, MDBDatatable,
} from "mdb-vue-ui-kit";
import path from "path-browserify";
import { schemalist } from "../metheods/gml_schema"
import { dataToGML } from "../metheods/gml_io"
import { loadSHPfile } from "../metheods/shp_io"
import JSZip from "jszip"

// 參數
  // 將多筆檔案建立成list表
  let inputList = {};
  let exportFilesList = [];

  const schemaSL=ref();

  // 讀取檔案元件的參數
  const files1 = ref([]);

  // 下拉式選單的參數
  const selectSchema = ref('');
  const selectSchemaMU = computed(() => {
    let selectlist=[];
    let result=[];
    selectlist.push({text: "-未選取-", value: -1})
    for (let i=0;i<schemalist.length;i++){
      selectlist.push({text: schemalist[i].tag, value: i})
    }

    for (let i=0;i<tableRows.value.length;i++){
      result.push(selectlist)
    }

    return result
  });

  // datatable
  const tableCols = [
    { label: "#", field: "id" },
    { label: "檔案名稱", field: "shpfile" },
    { label: "圖徵數量", field: "count" },
    { label: "坐標系統", field: "csr" },
    { label: "類型", field: "schema" },
    { label: "匯出", field: "export" },
  ];
  const tableRows = ref([]);
  const shpTableData = computed(()=>{
    return {
      columns: tableCols,
      rows: tableRows.value,
    }
  })
  function selecSHP(x){
    exportFilesList=x;
    // x是datatable的rows date中被選擇的index
    // 從rows date(即shpTableData.value.rows)中取出列資料的[檔案名稱]
    // 因為inputList中的資料是由[檔案名稱]來查找v-model:selected="selectSchema" 

    // 在本函數中建立一個所有被選取須轉換的[檔案名稱]陣列
    // 作為後續經由inputList物件按照[檔案名稱]轉換GML之用
  }
// 函式
async function loadSHPfiles(event){
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

  // 清空列表
  tableRows.value=[];
  let tempRows=[];
  // 讀取每個shp
  for (let i=0; i<shpCount; i++ ){
    await loadSHPfile(inputList[shpList[i]].shp, inputList[shpList[i]].dbf)
    .then(res=>{
      // 填入列表資料
      return tempRows.push({
        id: i,
        shpfile: shpList[i],
        count: res.length,
        rowdata: res,
        csr: 'EPSG:3826',
        schema: "",
        export: null,
        exblob: null,
      })
      // saveGML(res, schemalist[selectSchema.value])
    })
  }
  tableRows.value=tempRows;
}

function renderDT(e){
  console.log(e)
  if(e.rows.length>0){
    for (let i=0;i<e.rows.length;i++){
      let sl = document.getElementById(`schemaselctor${i}`);
      let togetDOM = document.querySelector(`tr[data-mdb-index="${i}"]>td:nth-child(6)`);
      console.log(togetDOM)
      togetDOM.innerHTML="";
      togetDOM.append(sl)
    }
  }
}

// 匯出GML
function doExport(){
  let x=exportFilesList;
  let shpfiles = tableRows.value;
  
  for (let i=0;i<x.length;i++){
    let schemaName=shpfiles[x[i]].schema;
    let schema = schemalist.find(x=>x.tag===schemaName);
    saveGML(shpfiles[x[i]].rowdata, schema, shpfiles[x[i]].shpfile)
      .then(res=>{
        // console.log(res.outerHTML)
        res.link.innerHTML=shpfiles[x[i]].shpfile;
        shpfiles[x[i]].export = res.link.outerHTML;
        shpfiles[x[i]].exblob = res.blob;
      })
  }
  // console.log(shpfiles);
}

function saveGML(data, schema, shpfilename){
  return new Promise((resole,reject)=>{
    let dataStr = dataToGML(data, schema);
    //藉型別陣列建構的 blob 來建立 URL
    let fileName = shpfilename + ".gml";
    let blob = new Blob([dataStr], {
      type: "application/octet-stream",
    });
    let href = URL.createObjectURL(blob);
    // 從 Blob 取出資料
    let link = document.createElement("a");
    // document.body.appendChild(link);
    link.href = href;
    link.download = fileName;
    resole({
      link: link,
      blob: blob,
    });
    // link.click();
    // document.body.removeChild(link);
  })
}

async function downLoadAll(){
  let shpfiles = tableRows.value;

  const zip = new JSZip();
  for (let i=0; i<shpfiles.length; i++){
    if(shpfiles[i].exblob){
      zip.file(shpfiles[i].shpfile+'.gml', shpfiles[i].exblob)
    }
  }

  const zipFile = await zip.generateAsync({ type: 'blob'});

  // console.log(zipFile)

  const link = document.createElement("a");
  link.download = 'export.zip';

  const href = URL.createObjectURL(zipFile);
  link.href = href;
  
  link.style.display = 'none';
  
  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(href);
}

onMounted(()=>{
  // schemaSL = document.getElementsByClassName('schemaselctor')[0]
  // console.log(schemaSL)

})

</script>

<template>
  <MDBContainer>
    <MDBRow class="pb-3 border-bottom">
      <MDBCol col="8">
        <MDBFile 
          multiple
          v-model="files1" 
          label="選擇shape file(請同時選擇.shp 及 .dbf)" 
          accept=".shp, .dbf, prj" 
          @change="loadSHPfiles($event)"/>
      </MDBCol>
      <MDBCol class="d-flex align-items-center justify-content-center">
        <MDBBtn 
          color="primary"
          @click="doExport"
        >產生GML</MDBBtn>
        <MDBBtn 
          color="primary"
          @click="downLoadAll"
        >全部下載</MDBBtn>
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBDatatable 
        selectable  
        multi
        hover
        sortField="id"
        sortOrder="asc"
        striped
        :dataset="shpTableData"
        @selected-indexes="selecSHP($event)"
        @render="renderDT($event)"
        />
    </MDBRow>
  </MDBContainer>
  <div class="d-none">
    <MDBSelect v-for="(x, index) in tableRows"
      :id='"schemaselctor"+index'
      class="schemaselctor"
      v-model:options="selectSchemaMU[index]"
      
      />
  </div>
  
  
  

</template>
<style>
.datatable {
  --mdb-datatable-color: #000000 !important;
  /* --mdb-datatable-background-color: #64B5F6 !important; */
  --mdb-datatable-accent-bg: #E0E0E0 !important;
  /* --mdb-datatable-hover-tbody-tr-transition: #90CAF9 0.2s ease-in !important; */
  --mdb-datatable-hover-bg: #FFF9C4 !important;
}
.datatable a{
  text-decoration: underline;
}
.btn {
  --mdb-btn-padding-x: 1rem !important;
}
</style>