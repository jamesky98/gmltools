export default function(record) {
  return {type: "Point", coordinates: [record.getFloat64(4, true), record.getFloat64(12, true), record.getFloat64(20, true), record.getFloat64(28, true)]};
};
