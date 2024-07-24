const mongoose = require('mongoose');
const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require('dotenv').config();

const port = process.env.PORT || 3000;

// Create a Schema object

const URL = process.env.ATLAS_URI;

const summer24Schema = new mongoose.Schema({
  myName: {type: String, require: true},
  mySID: {type: Number, require: true},
});

summer24Schema = mongoose.connect(URL, { useNewUrlParser: true, useNewUnifiedTopology: true })
.then(
console.log("Sucessful connection")
);

// Create a Model object

const student = ("students24", summer24Schema);


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/form.html")
});

app.post('/', async (req, res) => {
  // get the data from the form
  res.send()
  // connect to the database and log the connection


  // add the data to the database
  const newStudent = new student(
    myName = req.body.myName,
    mySID = req.body.mySID
  );

  // send a response to the user
  res.send(`<h1>Document  Added</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
