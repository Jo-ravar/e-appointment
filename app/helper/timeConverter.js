function convert(data, callback) {
  let newResult = [];
  for (let i = 0; i < data.length; i++) {
    let st = data[i].start_time;
    let et = data[i].end_time;
    let a = st / 60;
    let stHr = parseInt(a / 60);
    let stMin = a % 60;
    let b = et / 60;
    let etHr = parseInt(b / 60);
    let etMin = b % 60;
    let obj = {
      start_hr: stHr,
      start_min: stMin,
      end_hr: etHr,
      end_min: etMin,
    };
    newResult.push(obj);
  }
  callback(null, newResult);
}
module.exports = {
  convert: convert,
};
