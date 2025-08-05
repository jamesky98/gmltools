export default function(record) {
  console.log("record", record);
  if (record.byteLength < 36) {
    // console.log("record.length", record.byteLength);
    // get x,y,z
    return {type: "Point", coordinates: [record.getFloat64(4, true), record.getFloat64(12, true), record.getFloat64(20, true)]};
  }else{
    // console.log("record.length", record.byteLength);
    // get x,y,z,m
    return {type: "Point", coordinates: [record.getFloat64(4, true), record.getFloat64(12, true), record.getFloat64(20, true), record.getFloat64(28, true)]};
  }
  
};
