var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
//-------------------------------
const { Console } = require('console');
const path = require('path');
const router = express.Router();
const bodyParser = require("body-parser");
const { addAbortSignal } = require('stream');
const { request } = require('http');
const { read } = require('fs');
const axios = require('axios');
const { jsPDF } = require("jspdf"); 
//--------------------------
//module import
const { emailSend } = require('./Email');

 

//using body parser
app.use(bodyParser.urlencoded({extended: false}));

//used to make a virtual path to load images
app.use('/assets', express.static(__dirname + '/assets'));


var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        foo: function () { return 'FOO!'; },
        bar: function () { return 'BAR!'; }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res, next) {
    res.render('home', {
        showTitle: true,

        // Override `foo` helper only for this rendering.
        helpers: {
            foo: function () { return 'foo.'; }
        }
    });
    console.log('home page');
});

app.post('/', (req, res, next)=>{
    console.log(req.body)
    var load = {
        'Name': req.body.name,
        'Email': req.body.email,
        'Phone' : req.body.phone,
        'Message' : req.body.message
    };

     console.log('Name = ' + load.Name); 
     console.log('Email = ' + load.Email);
     console.log('Phone = ' + load.Phone);
     console.log('Message = ' + load.Message);  


    //back-end post to strapi DB  
    axios.post('http://localhost:1337/theyogidudecontacts', load)
        .then(res => {
            console.log(`statusCode: ${res.status}`)
            // console.log(res.config)

        })
        .catch(error => {
            // console.error(error)
        })


        // // // creates a PDF
        // const doc = new jsPDF();
        // doc.text(load, 10, 10);
        // doc.save("_a5.pdf");

        console.log('post complete');
});


app.get('/waiver', (req, res, next)=>{
    res.render('waiver', {
        showTitle: true,

        // Override `foo` helper only for this rendering.
        helpers: {
            foo: function () { return 'waiver.'; }
        }
    });
    console.log('get waiver complete');
});

app.post('/waiver', (req, res, next)=>{
    var load = {
        'Name' : req.body.name,
        'Date' : req.body.date,
        'Email' : req.body.email,
        'Emane': req.body.ename,
        'Etel': req.body.etel,
        'Check': req.body.checkbox
    }

    // console.log('Check waiver ' + req.body.checkbox);
    // console.log('name waiver ' + req.body.name);
    // console.log('date waiver ' + req.body.date);
    // console.log('emane waiver ' + req.body.ename);
    // console.log('etel waiver ' + req.body.etel);
    // console.log('Check waiver ' + req.body.checkbox);

    //back-end post to strapi DB  
    axios.post('http://localhost:1337/waivers', load)
        .then(res => {
            console.log(`statusCode: ${res.status}`)
            // console.log(res.config)

        })
        .catch(error => {
            console.error(error)
        })

    emailSend(load);
});

app.get('/info', (req, res, next)=>{
    res.render('info', {
        showTitle: true,

        // Override `foo` helper only for this rendering.
        helpers: {
            foo: function () { return 'Info.'; }
        }
    });
    console.log('post info complete');
});

app.get('/temp', (req, res, next)=>{
    res.render('temp', {
        Name: 'Bob'
    });
    console.log('post info complete');
});

app.post('/temp', (req, res, next)=>{
    var name = req.body.name;
    console.log('name a' + name);
    // console.log(req);

});

// app.post('/', (req, res, next)=>{
//     console.log('post complete');
// });



app.listen(process.env.port || 3000);
console.log('Running at Port 3000');
