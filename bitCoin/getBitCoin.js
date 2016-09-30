require('dotenv').load();
var request = require('request');
var moment = require('moment');
var url = 'https://blockchain.info/ticker';
var sendBitCoin = require("./putData.js")

module.exports = function uploadData(){
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var res = JSON.parse(body);
      var currentTime = moment().toISOString();
      sendBitCoin(res, currentTime);
    }
  })
}
