require('dotenv').config()
const sgMail = require('@sendgrid/mail');

const emailSend = (load) => {
  
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

 const msg = {
   to: load.Email,
   from: 'info@theyogidude.com',  //Use the email address or domain you verified above
   subject: `Sending with Twilio SendGrid is Fun ${load.Email}`,
   text: `and easy to do anywhere, even with Node.js ${load.Name}`,
   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
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
 (async () => {
   try {
     await sgMail.send(msg);
   } catch (error) {
     console.error(error);

     if (error.response) {
       console.error(error.response.body)
     }
   }
 })();

console.log('email.js load.name = '+ JSON.stringify(msg))

};

module.exports = {
  emailSend
}

// email();