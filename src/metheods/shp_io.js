import { resolve } from 'path-browserify';
import { open as openSHP } from 'shapefile'

// 函式
function loadSHPfile(shpFile, dbfFile){
  return new Promise((resolve, reject)=>{
    let shpFileData=[];
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
        let geoData = openSHP(shpBuffer, dbfBuffer, {encoding: 'Big5'})
          .then(source => source.read()
            .then(function log(result) {
              if (result.done) { 
                // console.log('shpData',shpFileData);
                return shpFileData;
              }
              shpFileData.push(result.value);
              return source.read().then(log);
            })
          )
        .catch(error => reject(console.error(error.stack)));
        // console.log('geoJson',geoJson);
        resolve(geoData)
      }
      reader_dbf.readAsArrayBuffer(dbfFile);
    }
    reader_shp.readAsArrayBuffer(shpFile);
  })
}

export { 
  loadSHPfile
};