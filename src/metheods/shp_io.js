// import { resolve } from 'path-browserify';
import { open as openSHP } from '../metheods/shapefile'
import { crslist } from "../metheods/csr"

// 函式
function loadSHPfile(inputFile, callbakMsg){
  let shpFile = inputFile.shp
  let dbfFile = inputFile.dbf
  let prjFile = inputFile.prj

  return new Promise(async (resolve, reject)=>{
    let shpFileData=[];
    // 載入shp
    let shpBuffer = await readSHP(shpFile, callbakMsg);
    // 載入dbf
    let dbfBuffer = null;
    if (dbfFile){
      dbfBuffer = await readDBF(dbfFile, callbakMsg);
    }
    // 載入prj
    let prjBuffer = null;
    let crs = 'EPSG:3826'
    if(prjFile){
      prjBuffer = await readPRJ(prjFile, callbakMsg);
      // 判斷EPSG...
      let esri_name = prjBuffer.split("\"")[1];
      // 從列表中找尋對應的EPSG
      let cslist_idx = crslist.findIndex(x=>x.esri_name===esri_name);
      if(cslist_idx>=0){
        crs = crslist[cslist_idx].epsg_code;
        callbakMsg.push('[訊息] prj檔對應 ' + crs + ' 坐標系統')
      }else{
        callbakMsg.push('[訊息] prj檔無法對應，預設使用 EPSG:3826 坐標系統')
      }
    }else{
      callbakMsg.push('[訊息] 無prj檔，預設使用 EPSG:3826 坐標系統')
    }
    let dims = 2;
    let geoData = openSHP(shpBuffer, dbfBuffer, {encoding: 'Big5'})
      .then(source => source.read()
        .then(function log(result) {
          // console.log(result)
          if (result.done) { 
            // console.log('shpData',shpFileData);
            // return shpFileData;
            let geodata = shpFileData[0].geometry;
            if(geodata.type === 'Point'){
              if(geodata.coordinates.length>2){dims=3}
            }else{
              if(geodata.coordinates[0].length>2){dims=3}
            }
            
            return resolve({
              geoData:shpFileData,
              crs:crs,
              dims: dims,
            })
          }
          shpFileData.push(result.value);
          return source.read().then(log);
        })
      )
    .catch(error => {
      callbakMsg.push('[錯誤] ' + error.stack)
      reject(console.error(error.stack));
    });
  })
}


function readSHP(shpFile, callbakMsg){
  // 載入shp
  let reader_shp = new FileReader();
  let shpBuffer;
  return new Promise((resolve,reject)=>{
    try {
      reader_shp.onload = function(e_shp) {
        callbakMsg.push('[訊息] - - - - - -> 讀取完成')
        shpBuffer = e_shp.target.result;
        resolve(shpBuffer)
      }
      reader_shp.readAsArrayBuffer(shpFile);
      callbakMsg.push('[訊息] >>>開始讀取' + shpFile.name);
    } catch(e){
      callbakMsg.push('[訊息] ' + shpFile.name + '讀取錯誤:' + e );
    }
  })
}

function readDBF(dbfFile, callbakMsg){
  // 載入dbf
  let reader_dbf = new FileReader();
  let dbfBuffer;
  return new Promise((resolve,reject)=>{
    try {

      reader_dbf.onload = function(e_dbf) {
        callbakMsg.push('[訊息] - - - - - -> 讀取完成')
        dbfBuffer = e_dbf.target.result;
        resolve(dbfBuffer)
      }
      reader_dbf.readAsArrayBuffer(dbfFile);
      callbakMsg.push('[訊息] >>>開始讀取' + dbfFile.name);
    } catch(e){
      callbakMsg.push('[訊息] ' + dbfFile.name + '讀取錯誤:' + e );
    }
  })
}

function readPRJ(prjFile, callbakMsg){
  // 載入prj
  let reader_prj = new FileReader();
  let prjBuffer;
  return new Promise((resolve,reject)=>{
    try {
      reader_prj.onload = function(e_prj) {
        callbakMsg.push('[訊息] - - - - - -> 讀取完成')
        prjBuffer = e_prj.target.result;
        resolve(prjBuffer)
      }
      reader_prj.readAsText(prjFile);
      callbakMsg.push('[訊息] >>>開始讀取' + prjFile.name);
    } catch(e){
      callbakMsg.push('[訊息] ' + prjFile.name + '讀取錯誤:' + e );
    }
  })
}

export { 
  loadSHPfile
};