var moment = require('moment');

exports.update_blocks = function(ref,ref_record,key){
  ref.child(key+"/block").on('value',function(snap){
    ref_record.push({
      block_id: block_id = key,
      timeStamp: moment().format(),
      availablePx: availablePx = snap.val().availablePx,
      price_per: Pxprice_perPx = 10
    })
  })


  /*ref.child(key+"/block").on('value',function(snap){
      const px_prce_init = snap.val().basePrice/snap.val().availablePx
      ref.child(key+"/records").push (
         timestamp= moment()
      )
      console.log(px_prce_init)
  })*/
}