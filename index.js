const mongoose = require('mongoose');
const express = require('express');
const User = require('./models/User.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require('dotenv').config();

const port = process.env.PORT || 3000;

// Create a Schema object
  //models/User
// Create a Model object
const userData = {
  myName: "Muharrem Can Nuhay",
  mySID: "300381228",
};
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/form.html")
});

app.post('/', async (req, res) => {
  // get the data from the form
  myuri = req.body.myuri;
  // connect to the database and log the connection
  mongoose.connect(myuri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  }).then(() => console.log('MongoDB open'))
  .catch((err) => console.log(err));
  console.log(myuri);
  // add the data to the database
  try{
    const user = new User(userData);
    await user.save();
    res.status(201).send(`<h1>Document  Added</h1>`);
  }catch{
    res.status(400).send(`<h1>Document  NOT Added</h1>`)
  }
  // send a response to the user
  res.send(`<h1>Document  Added</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
