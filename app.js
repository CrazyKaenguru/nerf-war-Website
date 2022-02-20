var http = require('http');
const express = require('express');
const fs = require('fs');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
const basicAuth = require('express-basic-auth')
//all variables that are send to user
var capturestatus ='uncaptured';
var capturetimered = '';
var capturetimeblue = '';

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
})

app.get('/', function (req, res) {
    // assuming index.html is in the same directory as this script

  app.set("view engine", "ejs");
  res.render(__dirname + '/public/index.ejs',{
  });
    
    
    });
    app.post('/resetGame', function (req, res) {
      capturetimered="00:00:00";
      capturetimeblue="00:00:00";
      console.log("Resettet Game")
      app.set("view engine", "ejs");
          res.render(__dirname + '/public/index.ejs',{
          });
      });
    app.post('/captureteamred', function (req, res) {
      capturetimered=req.body.redtime;
      capturetimeblue=req.body.bluetime2;
      console.log("capturetimered"+capturetimered);
      console.log("capturetimeblue"+capturetimeblue);
      console.log(capturetimered);
     res.end;
     console.log("captureteamred");
     capturestatus ='Team Red';
    });


    app.post('/captureteamblue', function (req, res) {
      capturetimered=req.body.redtime2;
      capturetimeblue=req.body.bluetime;
     console.log("capturetimeblue"+capturetimeblue);
      console.log("capturetimered"+capturetimered);
       res.end;
       console.log("captureteamblue");
       capturestatus ='Team Blue';
      });



      app.get('/status', function (req, res) {
        app.set("view engine", "ejs");
        res.render(__dirname + '/public/status.ejs',{
          capturestatus : capturestatus,
          capturetimered: capturetimered,
          capturetimeblue: capturetimeblue ,
        });
      });
    var server = app.listen(3000, function () {
        console.log('Node server is running..');
    });