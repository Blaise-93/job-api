require("dotenv").config()
const mongoose = require('mongoose');

const connectDB = () => {
  const url = process.env.MONGO_URL
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;
  
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('Connected to MongoDB!');
  });
}

module.exports = connectDB