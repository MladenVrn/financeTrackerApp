const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
//import Models
const Finances = require('./model/financeModel');

//establish db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/finances');
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
  
})

//test request
app.post('/', (req, res) => {
  //get request params
  const description = req.body.description._value;
  const number = req.body.inputNumber._value;

  console.log(description);
  console.log(number);
  //create database object
  const finance = new Finances({
    description: description,
    number: number
  });
  
  //check if finaces are not empty
  if(finance !== null){
    finance.save();
    console.log("new finances saved in DB");
  }else{
    console.log("something went wrong!");
  }

});

//fetch data from database and send them to frontend



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})