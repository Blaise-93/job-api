const mongoose = require('mongoose');

const connectDB = () => {
  const url = 'mongodb://localhost:27017/job-api'
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