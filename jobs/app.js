require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const registerRoute = require('./routes/auth')
const jobRoute = require('./routes/jobs')

const connectDB = require('./db/connect');
//const productsRouter = require('./routes/products');

const notFoundMiddleware = require('./middlewares/not-found');
const errorMiddleware = require('./middlewares/error');

// middleware
app.use(express.json());


// routes
app.use('/api/v1/auth', registerRoute)
app.use('/api/v1/jobs',  jobRoute);


//app.use('/api/v1/products', productsRouter);

// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = 3000  || process.env.PORT ;

const start = async () => {
  try {
    // connectDB
    connectDB();
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
