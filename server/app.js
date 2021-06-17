const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config({ path: './config.env' });

const app = express();

const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`Server started on port:${PORT}`));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;
// console.log(DB);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('DB CONNECTION SUCCESSFUL');
  });

//   Set up the routes

app.use('/auth', require('./routers/userRouter'));
app.use('/customer', require('./routers/customerRouter'));
