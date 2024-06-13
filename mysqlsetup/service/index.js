const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();
// const db = require('../model/index')

module.exports.mailsend = async (body, mail_data) => {
  let transporter = await nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
    logger: true,
    debug: process.env.SMTP_DEBUG,
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailInfo = await transporter.sendMail(body);
  if (!mailInfo) {
    console.log("Error occurred while sending email:");
    return false;
  } else {
    console.log('Email sent successfully!');
    return mailInfo;
  }
};