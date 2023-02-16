const nodemailer = require("nodemailer");

// const sendEmail = async (options) => {
//   try {
//     console.log(process.env.SMTP_FROM);
//     let transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: process.env.SMTP_PORT,
//       secure: false,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASSWORD,
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     });

//     await transporter.sendMail({
//       from: `${process.env.SMTP_NAME} <${process.env.SMTP_FROM}>`,
//       to: options.id,
//       subject: options.subject,
//       html: options.message,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = sendEmail;

const mailjet = require("node-mailjet");
const Mailjet = mailjet.apiConnect(
  process.env.SMTP_API_KEY_PUBLIC,
  process.env.SMTP_API_KEY_PRIVATE
);

const sendEmail = async (options) => {
  try {
    Mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.SMTP_FROM,
            Name: process.env.SMTP_NAME,
          },
          To: [
            {
              Email: options.id,
              // Name: options.id.split("@")[0],
              Name: "Bayrjavkhlan",
            },
          ],
          Subject: options.subject,
          TextPart: "My first Mailjet email",
          HTMLPart: options.message,
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
