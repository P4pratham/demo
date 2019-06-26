var express = require('express');
var app = express();
var employeeController=function (req, res) {
  console.log("Calling rest api of employee");
  var employee=[
            {firstName:'Pratham',lastName:'Shelke',eId:936,},
            {firstName:'Prashant',lastName:'Patel',eId:435,},
            {firstName:'Rohan',lastName:'Shrivastav',eId:288,},
            {firstName:'Manoj',lastName:'Trivedi',eId:255,},
            {firstName:'Arprit',lastName:'Patham',eId:234,}
      ];
  res.send(employee);
};
var officesController=function (req, res) {
    console.log("Calling rest api of offices");
    var offices=[
              {location:'India',oId:1936,noOfEmp:25000},
              {location:'USA',oId:2435,noOfEmp:300},
              {location:'China',oId:2288,noOfEmp:800},
              {location:'Africa',oId:3255,noOfEmp:234},
              {location:'Mexico',oId:8234,noOfEmp:200}
        ];
    res.send(offices);
  };
  app.get('/offices',officesController );  
app.get('/employee',employeeController );
  var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("http://localhost:", host, port)
})