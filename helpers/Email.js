const nodemailer = require("nodemailer");


async function sendEmail(
    to,
    subject,
    text,
    html
) {
  console.log(process.env);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD,
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Coderlust" <coderlust10@gmail.com>',
    to,
    subject,
    text,
    html,
  });

  return Promise.resolve(info);
}

module.exports = sendEmail;