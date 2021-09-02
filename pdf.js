var html_to_pdf = require('html-pdf-node');
var express = require('express');
var app = express();

// app.use('/assets', express.static(__dirname + '/assets'));

let option = { format: 'A4', path: '/assets'};

let file = { url: 'http://localhost:3000/waiver'};


html_to_pdf.generatePdf(file, option).then(pdfbuffer => {
    console.log('pdf buffer :- ', pdfbuffer)
})