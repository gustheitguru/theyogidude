const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//used to make a virtual path to load images
app.use('/images', express.static('images'));
app.use('/assets', express.static('assets'));

//HomePage for Data Entry for Barcodes
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

//Contact Page
router.get('/contact.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/contact.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
