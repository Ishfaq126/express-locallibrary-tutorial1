const { urlencoded } = require("body-parser");
const bodyParser = require("body-parser");
const express = require("express");
const { mongoose } = require("mongoose");
const ejs = require('ejs')
const hcontroller = require('./controllers/hcontroller')
const dcontroller = require('./controllers/dcontroller')
const ccontroller = require('./controllers/ccontroller')
const tcontroller = require('./controllers/tcontroller')
const acontroller = require('./controllers/acontroller')
const authUser = require('./middelware/authUser');      

const app = express();
app.set('view engine' , 'ejs');
app.use(bodyParser.json());
app.use(urlencoded({extended : true}));
const cors = require('cors');
app.use(cors());

const City = require('./models/City');
const Destination = require('./models/Destination');
const Cuisine = require('./models/Cuisine');
const Transportation = require('./models/Transportation');
const Hotel = require('./models/Hotel');
const User = require('./models/User');
const Admin = require('./models/Admin');
const Guide = require('./models/Guide');
const Manager = require('./models/Manager');
const HReviews = require('./models/HReviews');
const GReviews = require('./models/GReviews');

mongoose.connect('mongodb://127.0.0.1:27017/Tourplaner',{useNewUrlParser : true});

app.get('/api/getd/City',hcontroller.api1)
app.get('/getd/City/:id',hcontroller.api2)
app.put('/api/getd/City/:id',hcontroller.api3)
app.delete('/api/getd/City/del/:id',hcontroller.api4)
app.post('/api/getd/City/add',hcontroller.api5)

app.get('/api/getd/Destnations',dcontroller.api1)
app.get('/getd/Destnations/:id',dcontroller.api2)
app.put('/api/getd/Destnations/:id',dcontroller.api3)
app.delete('/api/getd/Destnations/del/:id',dcontroller.api4)
app.post('/api/getd/Destnations/add',dcontroller.api5)

app.get('/api/getd/Cuisine',ccontroller.api1)
app.get('/getd/Cuisine/:id',ccontroller.api2)
app.put('/api/getd/Cuisine/:id',ccontroller.api3)
app.delete('/api/getd/Cuisine/del/:id',ccontroller.api4)
app.post('/api/getd/Cuisine/add',ccontroller.api5)

app.get('/api/getd/Transportation',tcontroller.api1)
app.get('/getd/Transportation/:id',tcontroller.api2)
app.put('/api/getd/Transportation/:id',tcontroller.api3)
app.delete('/api/getd/Transportation/del/:id',tcontroller.api4)
app.post('/api/getd/Transportation/add',tcontroller.api5)

app.post('/auth/admin',acontroller.auth)

app.listen(3000,()=>{
    console.log("Welcome to the tourplaner Admin Panel");
})  