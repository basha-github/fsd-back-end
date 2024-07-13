const express = require('express')
const mongoose = require('mongoose');
const cors = require ('cors')
const Employee = require("./emp.model.js");


const app = express()
app.use(express.json());
app.use(cors());


// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


mongoose.connect('mongodb+srv://root:61pp5tbulpACibd7@mgitcluster.a0ib8zy.mongodb.net/sample-api?retryWrites=true&w=majority&appName=MGITCluster')
  .then(() => {
    console.log('Mongo DB got Connected!');
    app.listen(4000,()=>{
        console.log("Express App Server Started:: 4000");
    })
  });

  
  app.post("/emp/add",async(req,res)=>{
    try {
        const emp = await Employee.create(req.body);
        res.status(200).json(emp);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
  })

app.get("/emp/all",async(req,res)=>{
  try {
    const emps = await Employee.find({});
    res.status(200).json(emps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

  
  