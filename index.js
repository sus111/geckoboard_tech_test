var bitCoin = require('./bitCoin/getBitCoin');
var mins = 1000*60;
var time = 5;

function sendBitCoinData() {
  bitCoin();
  setTimeout(sendBitCoinData, mins*time);
}

sendBitCoinData();
