// Imports dependencies and set up http server
const express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json()), // creates express http server
  getRequest = require('./webhookVerify.js'),
  postRequest = require('./router.js');

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));
app.get('/webhook', getRequest);
app.post('/webhook', postRequest);
