

const express = require("express");
const mongoose = require('mongoose');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
require('dotenv').config();

const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/user.js');
const categoryRoutes = require('./routes/category.js');
//app  ww
const app = express();

//db
mongoose.connect(process.env.DATABASE, {

    useNewUrlParser: true,
    useCreateIndex: true
    })
    .then( () => console.log("DB Connected"));
//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
//routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);
});
