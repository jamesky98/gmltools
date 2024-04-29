import { resolve } from 'path-browserify';
import { open as openSHP } from 'shapefile'
import { crslist } from "../metheods/csr"

// 函式
function loadSHPfile(shpFile, dbfFile, prjFile){
  return new Promise(async (resolve, reject)=>{
    let shpFileData=[];
    // 載入shp
    let shpBuffer = await readSHP(shpFile);
    // 載入dbf
    let dbfBuffer = null;
    if (dbfFile){
      dbfBuffer = await readDBF(dbfFile);
    }
    // 載入prj
    let prjBuffer = null;
    let crs = 'EPSG:3826'
    if(prjFile){
      prjBuffer = await readPRJ(prjFile);
      // 判斷EPSG...
      let esri_name = prjBuffer.split("\"")[1];
      // 從列表中找尋對應的EPSG
      let cslist_idx = crslist.findIndex(x=>x.esri_name===esri_name);
      if(cslist_idx>=0){
        crs = crslist[cslist_idx].epsg_code;
      }
    }

    let geoData = openSHP(shpBuffer, dbfBuffer, {encoding: 'Big5'})
      .then(source => source.read()
        .then(function log(result) {
          if (result.done) { 
            // console.log('shpData',shpFileData);
            // return shpFileData;
            return resolve({
              geoData:shpFileData,
              crs:crs,
            })
          }
          shpFileData.push(result.value);
          return source.read().then(log);
        })
      )
    .catch(error => reject(console.error(error.stack)));
    // console.log('geoJson',geoJson);
    // resolve({
    //   geoData:geoData,
    //   crs:crs,
    // })
  })
}


function readSHP(shpFile){
  // 載入shp
  let reader_shp = new FileReader();
  let shpBuffer;
  return new Promise((resolve,reject)=>{
    reader_shp.onload = function(e_shp) {
      shpBuffer = e_shp.target.result;
      resolve(shpBuffer)
    }
    reader_shp.readAsArrayBuffer(shpFile);
  })
}

function readDBF(dbfFile){
  // 載入dbf
  let reader_dbf = new FileReader();
  let dbfBuffer;
  return new Promise((resolve,reject)=>{
    reader_dbf.onload = function(e_dbf) {
      dbfBuffer = e_dbf.target.result;
      resolve(dbfBuffer)
    }
    reader_dbf.readAsArrayBuffer(dbfFile);
  })
}

function readPRJ(prjFile){
  // 載入prj
  let reader_prj = new FileReader();
  let prjBuffer;
  return new Promise((resolve,reject)=>{
    reader_prj.onload = function(e_prj) {
      prjBuffer = e_prj.target.result;
      resolve(prjBuffer)
    }
    reader_prj.readAsText(prjFile);
  })
}

export { 
  loadSHPfile
};