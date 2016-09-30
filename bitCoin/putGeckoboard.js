var API_KEY = process.env.GECKOBOARD_API_KEY;
var gb = require('geckoboard')(API_KEY);

  module.exports = function SendData(res, currentTime){
    gb.datasets.findOrCreate(
      {
        id: 'bitcoin_rates_time',
        fields: {
          datetime: {
            type: 'datetime',
            name: 'Datetime',
          },
          currency: {
            type: 'string',
            name: 'Currency'
          },
          buy: {
            type: 'number',
            name: 'Buy',
          },
          sell: {
            type: 'number',
            name: 'Sell'
          }
        }
      },
      function (err, dataset) {
        if (err) {
          console.error(err);
          return;
        }

        dataset.put(
          [
            { datetime: currentTime, currency: res.GBP.symbol, buy: res.GBP.buy, sell: res.GBP.sell },
            { datetime: currentTime, currency: res.EUR.symbol, buy: res.EUR.buy, sell: res.EUR.sell },
            { datetime: currentTime, currency: res.CAD.symbol, buy: res.CAD.buy, sell: res.CAD.sell },
            { datetime: currentTime, currency: res.JPY.symbol, buy: res.JPY.buy, sell: res.JPY.sell },
            { datetime: currentTime, currency: res.CHF.symbol, buy: res.CHF.buy, sell: res.CHF.sell }
          ],
          function (err) {
            if (err) {
              console.error(err);
              return;
            }
            console.log('Dataset created and data added');
          }
        );
      }
    );
  }
