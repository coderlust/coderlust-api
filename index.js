const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

//mongodb connection
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log('Connection has been made, now make fireworks...');
})

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1', require('./routes/email-routes'));

app.listen(4040, () => {
    console.log("Magic happening at http://localhost:4040");
})