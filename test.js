var Sentiment = require('sentiment');
var sentiment = new Sentiment();
const express = require('express');
const app = express();
var port=process.env.PORT ||3000;
app.get('/api', function (req, res) {
  var data= req.query.id;
  console.log(data);

  var result = sentiment.analyze(data);
  if(result["score"]>0){
  console.log("positive!");
  res.send("positive");
}
  else {
    console.log("Negative");
      res.send("Negative");
  }
})


//
// var result = sentiment.analyze('Cats are good.');
// if(result["score"]>0)
// console.log("positive!");
// else {
//   console.log("Negative");
// }
app.listen(port);
