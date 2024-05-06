<script setup>
import { ref, onMounted, watch } from 'vue';
import { computed } from "@vue/reactivity";
import { 
  MDBContainer, MDBRow, MDBCol,
  MDBBtn, MDBFile, MDBSelect, MDBDatatable,
  MDBScrollbar, MDBTextarea,
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
  let isloadevent = false;

  const msgArray = ref(['====== 準備完畢 ======']);
  const pMessage = computed(()=>{
    return msgArray.value.join('\n')
  })

  watch(pMessage,(newVal,oldVal)=>{
    // console.log('watch')
    // txtAreaKey.value = (txtAreaKey.value>10)?0:txtAreaKey.value+1;
    msgMoveToEnd()
  },{
    flush: 'post'
  })

  function msgMoveToEnd(){
    // console.log('msgMoveToEnd')
    let msgbox = document.getElementById('msgTextarea');
    msgbox.scrollTop = msgbox.scrollHeight;
    // console.log(msgbox.scrollTop, msgbox.scrollHeight)
  }

  const shpTableMaxHeight = ref();

  function resizeSHPTable(){
    let windowH = window.innerHeight;
    // console.log('winH:',windowH)
    // let appP = document.getElementById('app').style.paddingRight;
    let appP = parseFloat(window.getComputedStyle(document.getElementById('app'), null).getPropertyValue('padding-top'))
    // console.log('appP:',appP)
    let btnH = document.getElementById('btnbox').getBoundingClientRect().height;
    // console.log('btnH:',btnH)
    let msgH = document.getElementById('msgbox').getBoundingClientRect().height;
    // console.log('msgH:',msgH)
    shpTableMaxHeight.value = windowH - (appP * 2) - btnH - msgH - 54;
    
    // console.log('shpTableMaxHeight',shpTableMaxHeight.value)
  }
  window.addEventListener('resize',()=>{
    resizeSHPTable();
  })

  // 讀取檔案元件的參數
  const files1 = ref([]);

  // 下拉式選單的參數
  const selectSchemaMU = computed(() => {
    let selectlist=[];
    let result=[];
    selectlist.push({text: "-未選取-", value: -1})
    for (let i=0;i<schemalist.length;i++){
      selectlist.push({text: schemalist[i].tag, value: i})
    }

    for (let i=0;i<tableRows.value.length;i++){
      result.push(JSON.parse(JSON.stringify(selectlist)))
    }
    // console.log(result)
    return result
  });

  // datatable
  const tableCols = [
    { label: "#", field: "id" },
    { label: "檔案名稱", field: "shpfileName" },
    { label: "圖徵數量", field: "count" },
    { label: "坐標系統", field: "csr" },
    { label: "類型" },
    { label: "匯出", field: "export" },
    { label: "錯誤訊息", field: "errmsg" },
  ];
  const tableRows = ref([]); // 作為資料表內容使用
  const dataRows = ref([]); // 實際原始資料使用
  const shpTableData = computed(()=>{
    return {
      columns: tableCols,
      rows: tableRows.value,
    }
  })
  function selecSHP(x){
    exportFilesList=x;
    // console.log('x',x)
    // 把選擇結果填入tableRows中
    let shplist = dataRows.value
    shplist.forEach(x=>{x.selected=false});
    for(let i=0;i<x.length;i++){
      shplist[x[i]].selected=true;
    }
    // console.log('dataRows',dataRows.value);
    // console.log('tableRows',tableRows.value);
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
  // console.log('filelist',filelist)
  
  inputList={};
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
        prj: null,

      }
    }

    if(fileExt === '.shp'){
      inputList[fileName].shp = filelist[i];
    }else if(fileExt === '.dbf'){
      inputList[fileName].dbf = filelist[i];
    }else if(fileExt === '.prj'){
      inputList[fileName].prj = filelist[i];
    }
  }
  // console.log(inputList);
  // 計算所選SHP數量
  shpList = Object.keys(inputList);
  shpCount = shpList.length
  // console.log(shpCount);

  // 清空列表
  tableRows.value=[];
  dataRows.value=[];
  let tempRows=[];
  let tempDatas=[];
  // 讀取每個shp
  for (let i=0; i<shpCount; i++ ){
    await loadSHPfile(inputList[shpList[i]], msgArray.value)
    .then(res=>{
      // 填入列表資料
      msgArray.value.push('-------------------------------------');
      return [
        tempDatas.push({
          selected: false,
          id: i,
          shpfileName: shpList[i],
          count: res.geoData.length,
          rowdata: res.geoData,
          csr: res.crs,
          schema: "",
          export: null,
          exblob: null,
          errmsg: null,
          errblob: null,
        }),
        tempRows.push({
          id: i,
          shpfileName: shpList[i],
          count: res.geoData.length,
          csr: res.crs,
          export: null,
          errmsg: null,
        })
      ]
      // saveGML(res, schemalist[selectSchema.value])
    })
  }
  tableRows.value = tempRows;
  dataRows.value = tempDatas;
  isloadevent=true
  msgArray.value.push('[訊息] ====== 共計讀取 ' + shpCount +' 個 shp files ======');
  // console.log('tableRows',tableRows.value)

}

function renderDT(e){
  // console.log('render')
  // console.log(isloadevent)
  // console.log(e)
  if(isloadevent){
    if(e.rows.length>0){
      for (let i=0;i<e.rows.length;i++){
        let sl = document.getElementById(`schemaselctor${i}`);
        let togetDOM = document.querySelector(`tr[data-mdb-index="${i}"]>td:nth-child(6)`);
        // console.log(togetDOM)
        togetDOM.innerHTML="";
        togetDOM.append(sl)
      }
    }
    // console.log('data',tableRows.value)
    isloadevent=false
  }
  
}

// 產生GML
async function doExport(){
  let x=exportFilesList;
  let shpfiles = dataRows.value;
  // console.log('shpfiles',shpfiles)
  let shpTable = tableRows.value;
  // console.log('shpTable',shpTable)

  for (let i=0;i<x.length;i++){
    let schemaIndex=shpfiles[x[i]].schema;
    let shpName = shpfiles[x[i]].shpfileName;
    let convertErr = [];

    if(schemaIndex<0) { 
      let err = '[警告] #' + x[i] + ' [' + shpName + '] 未設定[類型](Schema)'
      msgArray.value.push(err);
      convertErr.push(err)
      continue; 
    }
    let schema = schemalist[schemaIndex];
    // console.log(shpfiles[x[i]].rowdata)
    await saveGML({
      data: shpfiles[x[i]].rowdata, 
      schema: schema, 
      filename: shpName, 
      csr: shpfiles[x[i]].csr
    },{mainMsg: msgArray.value, subMsg: convertErr})
      .then(res=>{
        // console.log(res.outerHTML)
        res.link.innerHTML=shpName;
        shpfiles[x[i]].export = res.link.outerHTML;
        shpTable[x[i]].export = res.link.outerHTML;
        shpfiles[x[i]].exblob = res.blob;


        // 處理錯誤訊息
        // console.log(convertErr)
        if(convertErr.length>0){
          let errTxt = convertErr.join('\n');
          // console.log(errTxt)
          let errBlob = new Blob([errTxt], {
            type: 'text/strings;charset=utf-8'
          });
          // console.log(errBlob)
          let errHref = URL.createObjectURL(errBlob);
          // console.log('errHref',errHref)
          let errLink = document.createElement("a");
          // document.body.appendChild(link);
          errLink.href = errHref;
          errLink.target = '_blank';
          // errLink.download = shpName + '_err.txt';
          errLink.innerHTML= shpName + '.err';
          // console.log('errLink',errLink)

          shpfiles[x[i]].errmsg = errLink.outerHTML;
          shpfiles[x[i]].errblob = errBlob;
          shpTable[x[i]].errmsg = errLink.outerHTML;
          // console.log('shpTable',shpTable)

        }
        

        msgArray.value.push('[訊息] '+shpName+' 轉檔完畢')
      }).catch((e)=>{
        console.log(e)
      })
  }
  // console.log(shpfiles);
}

// 建立GML下載檔案
function saveGML(shpfile, callbakMsg){
  let data = shpfile.data;
  let schema = shpfile.schema;
  let shpfilename = shpfile.filename;
  let csr = shpfile.csr;
  return new Promise((resole,reject)=>{
    // console.log(data)
    let dataStr = dataToGML(
      {
        rowdata: data,
        filename: shpfilename,
        csr: csr,
      }, schema, callbakMsg)
    .then(res=>{
      if(!res){
        callbakMsg.mainMsg.push('[警告] '+shpfilename+' 無法轉出GML')
        callbakMsg.subMsg.push('[警告] '+shpfilename+' 無法轉出GML')
        reject('not match')
      }

      // console.log(res)

      //藉型別陣列建構的 blob 來建立 URL
      let fileName = shpfilename + ".gml";
      let blob = new Blob([res], {
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
    })
  })
}

// 全部下載
async function downLoadAll(){
  let shpfiles = dataRows.value;

  const zip = new JSZip();
  for (let i=0; i<shpfiles.length; i++){
    if(shpfiles[i].exblob){
      zip.file(shpfiles[i].shpfileName+'.gml', shpfiles[i].exblob)
    }

    if(shpfiles[i].errblob){
      zip.file(shpfiles[i].shpfileName+'.err', shpfiles[i].errblob)
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
  resizeSHPTable();
})

</script>

<template>
  <MDBContainer class="h-100 d-flex flex-column">
    <MDBRow class="flex-grow-1 overflow-hidden">
      <MDBCol class="h-100 d-flex flex-column">
        <!-- 操作列 -->
        <MDBRow id="btnbox" class="pb-3 border-bottom">
          <MDBCol col="8">
            <MDBFile 
              multiple
              v-model="files1" 
              label="選擇shape file(請同時選擇.shp 及 .dbf 或 .prj)" 
              accept=".shp, .dbf, .prj" 
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
        <!-- 列表 -->
        <MDBRow id="shpbox" class="flex-grow-1 overflow-hidden" ref="shpBox">
          <MDBDatatable 
            fixedHeader
            selectable  
            multi
            hover
            sortField="id"
            sortOrder="asc"
            striped
            noFoundMessage="目前尚無資料"
            :maxHeight="shpTableMaxHeight"
            :dataset="shpTableData"
            @selected-indexes="selecSHP($event)"
            @render="renderDT($event)"
            />
        </MDBRow>
      </MDBCol>
    </MDBRow>
    <!-- 訊息列 -->
    <MDBRow id="msgbox" style="height: max-content;">
      <MDBCol class="h-100 p-2">
        <MDBTextarea 
          id="msgTextarea"
          readonly
          rows="4"
          style="max-height: calc(1.6 * 4rem);"
          v-model="pMessage"
          />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <div>
    <MDBSelect v-for="(x, index) in tableRows"
      :id='"schemaselctor"+index'
      class="schemaselctor"
      v-model:options="selectSchemaMU[index]"
      v-model:selected="dataRows[index].schema" 
      />
  </div>
  
  
  

</template>
<style>

.datatable {
  --mdb-datatable-color: #000000 !important;
  /* --mdb-datatable-background-color: #64B5F6 !important; */
  --mdb-datatable-accent-bg: #F0F0F0 !important;
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