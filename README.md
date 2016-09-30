# geckoboard_tech_test
Built in Javascript and tested with Jasmine, this project makes API calls to Blockchain.info and returns the latest Bitcoin exchange rates for the top world currencies (USD, GBP, EUR, JPY and CHF) and then pushes that data to the Geckoboard API. These calls are made every five minutes.

To see this dataset as widgets on the Geckoboard dashboard, visit:
https://suse.geckoboard.com/edit/dashboards/205663#16723492

To run the project, clone the repo, add a .env file to the project root with a Geckoboard API key inside. Then run the commands:
```
npm init
```
```
node index.js
```

In order to build graphs with currency rates over time, I'd like to add a database to the project.
