const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = express.Router({});
require('dotenv/config')

//Import Routes
const navBarRoutes = require('./routes/NavBarItemRoutes')
const newsItemsRoutes = require('./routes/NewsItemRoutes')
const healthCheck = require('./routes/HelathCheck')

//Middleware
app.use(bodyParser.json())
app.use(cors())
app.use('/',healthCheck)
app.use('/nav-items', navBarRoutes);
app.use('/news', newsItemsRoutes);



//connecting to the database
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true , useUnifiedTopology:true},
    () =>{
        console.log("connected to the database")
    }
)

//server start
app.listen(8000);