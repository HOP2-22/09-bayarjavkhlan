const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `${process.env.SMTP_NAME} <${process.env.SMTP_FROM}>`,
      to: options.id,
      subject: options.subject,
      html: options.message,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
