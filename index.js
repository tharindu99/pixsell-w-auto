var express = require('express');
var crt_blk = require('./newblock_create');
var upd_blk = require('./updateblock');
var firebase = require("firebase");

var app = express();

// Initialize Firebase
config = {
  apiKey: "AIzaSyAmCUFZR-oF8eqxhY24_iVtF_cZES4Tz8s",
  authDomain: "pixsell-m.firebaseapp.com",
  databaseURL: "https://pixsell-m.firebaseio.com",
  projectId: "pixsell-m",
  storageBucket: "pixsell-m.appspot.com",
  messagingSenderId: "85658630439"
};
firebase.initializeApp(config);
var ref = firebase.database().ref('Ad-blocks');
var ref_record = firebase.database().ref('Records');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
 /* firebase.database().ref('Ad-blocks')
    .on("value", function(snapshot) {
        var all_data = snapshot.val();
        var keys = Object.keys(all_data);
        console.log(keys[0]);
      
 }, function (errorObject) {
   console.log("The read failed: " + errorObject.code);
 });*/

  response.render('pages/index');
});

app.get('/newblock',function(request,response){
  console.log("new block page loaded ");
    ref.push({
      block:crt_blk.create_Block()
    });
  response.render('pages/newblock');
});

app.get('/updateblock',function(request,response){
  console.log("update adblocks");
  ref.on("value", function(snapshot) {
    var all_data = snapshot.val();
    var keys = Object.keys(all_data);
      keys.forEach(function(key) {
       upd_blk.update_blocks(ref,ref_record,key);
      }, this);
  }, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
  });
  response.render('pages/updateblock');
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
