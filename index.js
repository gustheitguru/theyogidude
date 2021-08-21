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

//using body parser
app.use(bodyParser.urlencoded({extended: false}));

//used to make a virtual path to load images
app.use('/images', express.static(__dirname + '/images'));
app.use('/assets', express.static(__dirname + '/assets'));


//HomePage for Data Entry for Barcodes
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});


//Contact Field
router.post('/',function (req, res){
    let name = req.body.name
    let email = req.body.email
    let phone = req.body.phone
    let message = req.body.message
    
    var load = {
        'Name': name,
        'email': email,
        'phone' : phone,
        'message' : message
    };
    //console.log('contact = ' + load);

    strapi(load);


});


//back-end post to strapi DB
function strapi (load) {
    
    axios.post('http://localhost:1337/theyogidudecontacts', load)
        .then(res => {
            console.log(`statusCode: ${res.status}`)
            console.log(res.config)
        })
        .catch(error => {
            console.error(error)
        })

};




//add the router
app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');
