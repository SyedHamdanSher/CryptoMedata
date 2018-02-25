const mysql = require('mysql2');

var getStudent, getCustomerData;
var getContact;
var keywords;
var address;
var newInfo;
var getStudent;
var getDrs;
//getStudent = [{'name':'Ahmed Sayed', 'contact':'17737032688', 'hawkid':'A20388365'}];
var $;
var env = require('require-env');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Block Chain file function calculateHash
// let medChain = new Blockchain();
// console.log('Mining block 1...');
// medChain.addBlock(new Block(1, "24/02/2018", { amount: 4 }));
//
// console.log('Mining block 2...');
// medChain.addBlock(new Block(2, "24/02/2018", { amount: 8 }));
//
// console.log('Mining block 3...');
// medChain.addBlock(new Block(3, "24/02/2018", { amount: 12 }));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
require("jsdom/lib/old-api").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
    $ = require("jquery")(window);
    //doSomething();
});
//jdbc:mysql://sher.cvddnfvcff4w.us-east-1.rds.amazonaws.com:3306/demon?autoReconnect=true&useSSL=false", "admin", "password"
const con = new mysql.createConnection({
    host: "hackillinois2018.mysql.database.azure.com",
    port: 3306,
    user: "hackillinois2018@hackillinois2018",
    password: "Discover@3701",
    database: "hackillinois",
    ssl: true,
    dialectOptions: {
        insecureAuth: true
    }
});

con.connect(
    function (err) {
        if (err) {
            console.log("!!! Cannot connect !!! Error11:");
            throw err;
        }
        else {
            console.log("Connection established.");
            //updateData();
        }
    });
console.log("Hello");
app.post('/patientRequest', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log("In Connect Database");
    var test = req.body;
    // con.connect(
    //     function (err) {
    //         if (err) {
    //             console.log("!!! Cannot connect !!! Error11:");
    //             throw err;
    //         }
    //         else {
    //             console.log("Connection established.");
    //             //updateData();
    //         }
    //     });

     console.log("Connection established.");

        console.log(test);
        console.log('Connected to database.');
        //var sql = "CREATE TABLE students (name VARCHAR(255), contact VARCHAR(255))";
        //var sql = "CREATE DATABASE iotpublicsafety"
        //var sql = "INSERT INTO students (name, contact) VALUES ?";
        var count = 3;
        //var sql = "Select * from students Limit " + count;
        var sql='';
        if (test.action == "accept"){
          sql = "UPDATE hackillinois.doctors SET Access = 'accept' WHERE DID="+test.drid;
        } else {
          sql = "UPDATE hackillinois.doctors SET Access = 'reject' WHERE DID="+test.drid;
        }
        //
        con.query(sql, function(err, rows, result) {
            if (err) throw err;
            //console.log("Number of records inserted: " , result);
            //getStudent = [];

            // var array = [];
            // for (var i = 0; i < rows.length; i++) {
            //     //array.push({name: rows[i].name, contact: rows[i].contact });
            //     var obj = {};
            //     obj.name = rows[i].Name;
            //     obj.contact = rows[i].Phone;
            //     array.push(obj);
            // }
            // //connection.end();
            // console.log(array);
            // getStudent = array;
            //     renderTable(getStudent);
            console.log("End");
            var chain = require('./chain');

        });
    //});

    // res.type('json');
    // res.send(JSON.stringify(getStudent));
    res.end();
    //con.end();
    //res.end();
    //next();
});

app.post('/doctorDetails', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log("In Connect Database");
    var test = req.body;

     console.log("Connection established.");

        console.log(test);
        console.log('Connected to database.');
        //var sql = "CREATE TABLE students (name VARCHAR(255), contact VARCHAR(255))";
        //var sql = "CREATE DATABASE iotpublicsafety"
        //var sql = "INSERT INTO students (name, contact) VALUES ?";
        var count = 3;
        //var sql = "Select * from students Limit " + count;
        var sql='';

          sql = "select * from hackillinois.doctors where PID=0 and Access ='pending'";

        //
        //var array = [];
        con.query(sql, function(err, rows, result) {
            if (err) throw err;
            getStudent =[];
            var array = [];
            for (var i = 0; i < rows.length; i++) {
                //array.push({name: rows[i].name, contact: rows[i].contact });
                console.log(rows[i]);
                var obj = {};
                obj.DID = rows[i].DID;
                obj.Timestamp = rows[i].Timestamp;
                obj.Name = rows[i].Name;
                console.log(rows[i].DID+" "+rows[i].Timestamp);
                console.log(obj);
                array.push(obj);
                console.log(array);
            }
            console.log("tetsd hsd kaslk sld "+array);
            getStudent=array;
            console.log("End"+getStudent);
            console.log(JSON.stringify(getStudent));

        });
        res.type('json');
        res.send(JSON.stringify(getStudent));
        console.log("Response End"+getStudent);
    res.end();

});

//app.use(express.bodyParser());
//Get Patient getPtDetails

app.post('/patientDetails', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log("In Connect Database");
    var test = req.body;

     console.log("Connection established.");

        console.log(test);
        console.log('Connected to database.');
        //var sql = "CREATE TABLE students (name VARCHAR(255), contact VARCHAR(255))";
        //var sql = "CREATE DATABASE iotpublicsafety"
        //var sql = "INSERT INTO students (name, contact) VALUES ?";
        var count = 3;
        //var sql = "Select * from students Limit " + count;
        var sql='';

          sql = "select * from hackillinois.patients where Did=0";

        //
        //var array = [];
        con.query(sql, function(err, rows, result) {
            if (err) throw err;
            getStudent =[];
            var array = [];
            for (var i = 0; i < rows.length; i++) {
                //array.push({name: rows[i].name, contact: rows[i].contact });
                console.log(rows[i]);
                var obj = {};
                obj.PID = rows[i].PID;
                obj.Timestamp = rows[i].Timestamp;
                obj.Name = rows[i].Name;
                obj.City = rows[i].City;
                obj.Request = rows[i].Request;
                console.log(rows[i].DID+" "+rows[i].Timestamp);
                console.log(obj);
                array.push(obj);
                console.log(array);
            }
            console.log("tetsd hsd kaslk sld "+array);
            getStudent=array;
            console.log("End"+getStudent);
            console.log(JSON.stringify(getStudent));

        });
        res.type('json');
        res.send(JSON.stringify(getStudent));
        console.log("Response End"+getStudent);
    res.end();

});


//Get PAtient Request
app.post('/patientViewRequest', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log("In Connect Database");
    var test = req.body;

     console.log("Connection established.");

        console.log(test);
        console.log('Connected to database.');
        //var sql = "CREATE TABLE students (name VARCHAR(255), contact VARCHAR(255))";
        //var sql = "CREATE DATABASE iotpublicsafety"
        //var sql = "INSERT INTO students (name, contact) VALUES ?";
        var count = 3;
        //var sql = "Select * from students Limit " + count;
        var sql='';

          sql = "UPDATE hackillinois.patients set Request='Yes' where Did=0 and PID="+test.pid;
          console.log(sql);

        //
        //var array = [];
        con.query(sql, function(err, rows, result) {
            if (err) throw err;
            getStudent =[];
            var array = [];
            // for (var i = 0; i < rows.length; i++) {
            //     //array.push({name: rows[i].name, contact: rows[i].contact });
            //     console.log(rows[i]);
            //     var obj = {};
            //     obj.PID = rows[i].PID;
            //     obj.Timestamp = rows[i].Timestamp;
            //     obj.Name = rows[i].Name;
            //     obj.City = rows[i].City;
            //     obj.Request = rows[i].Request;
            //     console.log(rows[i].DID+" "+rows[i].Timestamp);
            //     console.log(obj);
            //     array.push(obj);
            //     console.log(array);
            // }
            // console.log("tetsd hsd kaslk sld "+array);
            // getStudent=array;
            // console.log("End"+getStudent);
            // console.log(JSON.stringify(getStudent));

        });
        // res.type('json');
        // res.send(JSON.stringify(getStudent));
        // console.log("Response End"+getStudent);
    res.end();

});


//Function to return recommended doctors
app.post('/recommendedDoctorDetails', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log("In Connect Database");
    var test = req.body;

     console.log("Connection established.");

        console.log(test);
        console.log('Connected to database.');
        //var sql = "CREATE TABLE students (name VARCHAR(255), contact VARCHAR(255))";
        //var sql = "CREATE DATABASE iotpublicsafety"
        //var sql = "INSERT INTO students (name, contact) VALUES ?";
        var count = 3;
        //var sql = "Select * from students Limit " + count;
        var sql='';

          sql = "SELECT * FROM hackillinois.doc where description like '%"+test.input+"%' order by followers desc;";

        //
        //var array = [];
        con.query(sql, function(err, rows, result) {
            if (err) throw err;
            getDrs =[];
            var array = [];
            for (var i = 0; i < rows.length; i++) {
                //array.push({name: rows[i].name, contact: rows[i].contact });
                console.log(rows[i]);
                var obj = {};
                obj.DID = rows[i].DID;
                obj.Name = rows[i].Name;
                obj.aAddress = rows[i].aAddress;
                obj.description = rows[i].description;
                obj.website = rows[i].website;
                obj.followers = rows[i].followers;
                console.log(obj);
                array.push(obj);
                console.log(array);
            }
            console.log("tetsd hsd kaslk sld "+array);
            getDrs=array;
            console.log("End"+getDrs);
            console.log(JSON.stringify(getDrs));

        });
        res.type('json');
        res.send(JSON.stringify(getDrs));
        console.log("Response End"+getDrs);
    res.end();

});

//Twilio call to inform PAtient
//var accountSid = 'AC368353af798f45611ca034875071390c';
//var authToken = 'd5986470f972dc85428997786377696f';

//require the Twilio module and create a REST client
var twilio = require('twilio');
//var client = new twilio(accountSid, authToken);
var client = require('twilio')(accountSid, authToken);

app.post('/informPatient', function(req, res) {
  console.log("In Server");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log("In Twilio services");
  var test = req.body;
  // console.log(numbers[1].contact);
  // console.log(numbers[0].name);
   //for(var i = 0; i<=numbers.length; i++) {
      client.messages.create({
        //url: "https://handler.twilio.com/twiml/EH580a87163d69afbaf9788f963f3ba3c6",
          to: '+17737032688',
          from: "+18472609524",
          body: "Hi Zeshan,\n Dr.Hamdan viewed your Report. \n \tCryptoMedata",
      }, function(err, message) {
          console.log(message.sid);
      });
  //}
  console.log("Message Sent");
    res.end();
     //next();
  });



// app.post('/informPatient', function(req, res) {
//   console.log("In Server");
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   console.log("In Twilio services");
//   callback();
//   //}
//   console.log("Callback");
//     res.end();
//      //next();
//   });
//   var testData = {
//     "Inputs": {
//       "input1": {
//         "ColumnNames": [
//           "Fast Food Restaurant",
//           "Item",
//           "Type",
//           "Serving Size (g)",
//           "Calories"
//         ],
//         "Values": [
//           [
//             "value",
//             "value",
//             "value",
//             "0",
//             "0"
//           ],
//           [
//             "value",
//             "value",
//             "value",
//             "0",
//             "0"
//           ]
//         ]
//       }
//     },
//     "GlobalParameters": {}
//   };
//   var callback = function() {
//       console.log("In Post");
//       var request = require('request');
//       console.log(getCustomer);
//
//       $.ajax({
//         type: 'POST',
//         url: 'https://ussouthcentral.services.azureml.net/workspaces/a7584490bea74cfc9dfbb02008c961b9/services/c6ae4d7a571540f5ae2e7fbd58b5bb36/execute?api-version=2.0&details=true',
//         data: testData,
//         // },
//         beforeSend: function(request) {
//             request.setRequestHeader("Authorization", "bearer tyhG/w4hCrBGUtPd9EoVGcnwpDXVcbqd24tntyCpis5GEbpodGAHpG+hA7E3sN38HfarJe9pklNOgAL3X/EAKg==");
//         },
//         contentType: 'application/json',
//         dataType: 'json',
//         data: JSON.stringify(getCustomer),
//         success: function (data) {
//           console.log(data);
//         }
//       });
//
//       function postSuccessHandler(jsonData) {
//           console.log("Success");
//       };
//   } //p
//


app.listen(8080, function() {
    console.log('Waiting for the call');
});
