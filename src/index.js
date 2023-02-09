const express = require('express')

const bodyParser= require('body-parser')
const router = require('../src/router/route')

const app = express()
const mongoose = require('mongoose');
const multer = require('multer')
mongoose.set("strictQuery",true)
app.use(bodyParser.json());
app.use(multer().any())

mongoose.connect("mongodb+srv://Abhi_functionup:dBalIHuDvBLH2uZK@abhi1.m5k3ewv.mongodb.net/product_management",{
    useNewUrlParser:true
})
.then(()=> console.log("your mongoDB is linked"))
.catch(err => console.log(err))

app.use('/', router)

app.listen(3000,function(){
    console.log('This app is running on port ' + 3000)
})