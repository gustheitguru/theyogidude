require('dotenv').config()
const sgMail = require('@sendgrid/mail');
const fs = require("fs");

const emailSend = (load) => {
  
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var fileName = load.Date + load.fName;

//set to directory of PDF and veriable name for attachment
pathToAttachment = `${__dirname}/${fileName}.pdf`;
attachment = fs.readFileSync(pathToAttachment).toString("base64");

 const msg = {
   to: load.Email,
   from: 'info@theyogidude.com',  //Use the email address or domain you verified above
   subject: `The Yogi Dude Waiver for ${load.Name}`,
   text: `and easy to do anywhere, even with Node.js ${load.Name}`,
   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
   attachments: [
     {
       content: attachment,
       filename: `${fileName}.pdf`, //set filename variable
       type: "application/pdf",
       disposition: "attachment"
     }
   ]
 };
//  ES6
 sgMail
   .send(msg)
   .then(() => {}, error => {
     console.error(error);

     if (error.response) {
       console.error(error.response.body)
     }
   });
//  ES8
//  (async () => {
//    try {
//      await sgMail.send(msg);
//    } catch (error) {
//      console.error(error);

//      if (error.response) {
//        console.error(error.response.body)
//      }
//    }
//  })
//  ();

console.log('email.js load.name = '+ JSON.stringify(msg))

};

module.exports = {
  emailSend
}
