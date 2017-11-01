exports.create_Block = function() {
  var width = Math.floor((Math.random() * 40) + 10)*10;
  var height = Math.floor((Math.random() * 40) + 10);
  var numberOfPx = width*height;
  var basePrice = (numberOfPx *(Math.random() * 10)).toFixed(0)/1;
  var blockId = "0"+Math.floor((Math.random() * 999) + 100)+makeid(2);
  var siteName = makeid(5)+".lk";
  var blockName_arr = ["TOP-A","TOP-B","TOP-C","Right-A","Right-B","Right-C","Left-A","Left-B","Left-C"];
  var blockName = blockName_arr[Math.floor(Math.random()*blockName_arr.length)];
  var expectPrice = (basePrice * ((Math.random() * 30).toFixed(2) + 5)).toFixed(2);
  var ownerSetRisk_arr = ["0%","5%","10%","20%","25%","40%","50%","60%","75%","80%","90%"];
  var ownerSetRisk = ownerSetRisk_arr[Math.floor(Math.random()*ownerSetRisk_arr.length)];

  var new_block = {
    availablePx : numberOfPx,
    basePrice : basePrice,
    blockId : blockId,
    blockName : blockName,
    currentPrice : basePrice,
    duration : 30,
    expectPrice : expectPrice,
    numberOfPx : numberOfPx,
    width:width,
    height:height,
    ownerSetRisk : ownerSetRisk,
    progressRate : 0,
    siteName : siteName,
    starts : "2017-09-18 4.30 p.m" 
  } 
  return new_block;
};

function makeid(size) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < size; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}