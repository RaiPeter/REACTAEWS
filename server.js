const express = require("express");
const app = express();
const port = 3001;
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
app.use(express.json());

const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
function sendMail(){
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "gmail", // true for 465, false for other ports
      auth: {
        user: 'rai.peter2@gmail.com', // generated ethereal user
        pass: '*peter319645296@', // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"rai.peter2@gmail.com', // sender address
      to: "rahulrouth100@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world!", // plain text body
       // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
}

sendMail();



// mongoose
mongoose.connect('mongodb://127.0.0.1:27017/AEWS')
.then(

).catch()

app.use("/", require("./routes/volunteerRoute"));

app.listen(port, () => {
  console.log("Server listening on port " + port);
});