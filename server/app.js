const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const port = 3000;
const dbURL = 'mongodb://localhost/meanSocialMedia';
const dbName = 'meanSocialMedia';

const app = express();

var db;
MongoClient.connect(dbURL, { useNewUrlParser: true }, (err, client) => {
  if(err) throw err;
  db = client.db(dbName);
  //since we connected to the db we can start the server
  app.listen(port, () => console.log('mean-social-media-server listening on port ' + port));
});;

app.get('/messages', (req, res) => {
  db.collection('messages').find().toArray((err, results) => {
    if(err) throw err;
    res.send(results);
  });
});
app.post('/messages', (req, res) => {
  res.send('POST messages');
});
