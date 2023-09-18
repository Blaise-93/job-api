require('dotenv').config();
require('express-async-errors');


// extra security -> middleware config
const helmet = require('helmet')
const cors = require("cors")
const xss = require('xss-clean')
const  rateLimit  = require('express-rate-limit')




const express = require('express');
const app = express();
const registerRoute = require('./routes/auth')
const jobRoute = require('./routes/jobs')
const authenticateUser = require('./middlewares/auth')
const connectDB = require('./db/connect');
//const productsRouter = require('./routes/products');

const notFoundMiddleware = require('./middlewares/not-found');
const errorMiddleware = require('./middlewares/error');

// middleware
app.set('trust proxy')

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
})

// Apply the rate limiting middleware to all requests
app.use(limiter)
app.use(express.json());
//security
app.use(helmet())
app.use(cors())
app.use(xss())

app.get('/', (req, res) => {
  res.send('Job API')
})


// routes
app.use('/api/v1/auth', registerRoute)
app.use('/api/v1/jobs', authenticateUser, jobRoute);


//app.use('/api/v1/products', productsRouter);

// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port =  process.env.PORT || 3000 ;

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
