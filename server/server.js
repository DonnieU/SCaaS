const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const server = express();

server.use(cors());
server.use(bodyParser.json());

const port = 3000;

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017/scaas', { useMongoClient: true })
  .then(function (db) {
    console.log('db online');
    server.listen(port, function () {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch(function (err) {
    console.log('db connection failed:', err.message);
  });
