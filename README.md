# geckoboard_tech_test
Built in Javascript, this project makes API calls to Blockchain.info and returns the latest Bitcoin exchange rates for the top world currencies (USD, GBP, EUR, JPY and CHF) and then pushes that data to the Geckoboard API. These calls are made every five minutes.

To see this dataset as widgets on the Geckoboard dashboard, visit:
https://suse.geckoboard.com/edit/dashboards/205663#16723492

To run the project, clone the repo, add a .env file to the project root with a Geckoboard API key inside. Then run the commands:
```
npm init
```
```
node index.js
```

I found this project really fun, and I enjoyed working with the user-friendly Geckoboard website and using the clear documentation.
My project is very simple, I chose to use the Blockchian API as I found it very easy to use. I have an index file with a setTimeout function which calls functions that make API requests every five minutes. The API calls to Blockchain and Geckoboard are in different files in order to separate concerns.

Time permitting I'd have added a database to save currency rates (in order to produce line graphs with currency rates over time), as well as finding the best way to mock API calls for testing.
