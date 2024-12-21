require("dotenv").config();
const nodemailer = require("nodemailer");
let sendSimpleEmail = async (dataSend) => {
   const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth: {
         user: process.env.EMAIL_APP,
         pass: process.env.EMAIL_APP_PASSWORD,
      },
   });
   // send mail with defined transport object
   const info = await transporter.sendMail({
      from: '"Huu Manh👻" <huumanhtqt2002@gmail.com>', // sender address
      to: dataSend.receiversEmail, // list of receivers
      subject: "Thông tin đặt lịch khám bệnh", // Subject line
      text: "Hello world?", // plain text body
      html: getBodyHTMLEmail(dataSend),
   });
};
let getBodyHTMLEmail = (dataSend) => {
   console.log(dataSend);
   let result = "";
   if (dataSend.language === "vi") {
      result = `<h3>Xin chào ${dataSend.patientName}!</h3>
        <p>Bạn nhận được email này !</p>
        <div>
        <a href=${dataSend.redirectLink} target="_blank"> Click here</a>
        </div>`;
   }
   if (dataSend.language === "en") {
      result = `<h3>Hello ${dataSend.patientName}!</h3>
        <p>You receive this email !</p>
 <div>
        <a href=${dataSend.redirectLink} target="_blank"> Click here</a>
        </div>`;
   }
   return result;
};

module.exports = {
   sendSimpleEmail: sendSimpleEmail,
};
