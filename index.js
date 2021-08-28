const { Console } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require("body-parser");
const { addAbortSignal } = require('stream');
const { request } = require('http');
const { read } = require('fs');
const axios = require('axios');
const { jsPDF } = require("jspdf"); 

//using body parser
app.use(bodyParser.urlencoded({extended: false}));

//used to make a virtual path to load images
app.use('/images', express.static(__dirname + '/images'));
app.use('/assets', express.static(__dirname + '/assets'));


//HomePage for Data Entry for theyogidude
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

//Waiver for Data Entry for waiver
router.get('/waiver', function (req, res) {
    res.sendFile(path.join(__dirname + '/waiver.html'));
    //__dirname : It will resolve to your project folder.
});

//temp
router.get('/temp', function (req, res) {
    res.sendFile(path.join(__dirname + '/temp.html'));
    //__dirname : It will resolve to your project folder.
});

//Contact Field
router.post('/',function (req, res){

    var load = {
        'Name': req.body.name,
        'Email': req.body.email,
        'Phone' : req.body.phone,
        'Message' : req.body.message
    };
     console.log('contact = ' + load);


    //back-end post to strapi DB  
    axios.post('http://localhost:1337/theyogidudecontacts', load)
        .then(res => {
            console.log(`statusCode: ${res.status}`)
            console.log(res.config)

        })
        .catch(error => {
            console.error(error)
        })

        // // creates a PDF
        // const doc = new jsPDF();
        // doc.text('s', 10, 10);
        // doc.save("_a5.pdf");
        
    
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');
