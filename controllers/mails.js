// 6TTJZPVHTGC2C8FLZCN5BW5N
// import Nodemailer from "nodemailer";
import nodemailer from "nodemailer";
// import { MailtrapTransport } from "mailtrap";
import { MailtrapClient } from "mailtrap";
// import { createError } from "../utils/error";

// export const sendMails = async (req, res, next) => {
//   const body = req.body;
//   console.log("body coming form client is ", body);
//   const TOKEN = "2364d7a63b216d6fd085accea25195ca";
//   try {
//     console.log("step 1 for sending mails");
//     // const auth = nodemailer.createTransport({
//     //   host: "smtp.gmail.com",
//     //   secure: true,
//     //   port: 465,
//     //   auth: {
//     //     user: "navneetnishchal1420@gmail.com",
//     //     pass: "vrvjqbvlediwesht",
//     //   },
//     // });
//     // Looking to send emails in production? Check out our Email API/SMTP product!
//     var transport = nodemailer.createTransport({
//       host: "sandbox.smtp.mailtrap.io",
//       port: 2525,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });
//     // var transport = nodemailer.createTransport({
//     //   host: "sandbox.smtp.mailtrap.io",
//     //   port: 2525,
//     //   auth: {
//     //     user: "a23a4bc93472ea",
//     //     pass: "********3896",
//     //   },
//     // });
//     console.log("step 2 for sending mails");
//     // const sender = {
//     //   address: "hello@example.com",
//     //   name: "Mailtrap Test",
//     // };
//     // const recipients = ["navneetnishchal1420@gmail.com"];

//     const reciever = {
//       from: "navneetnishchal1420@gmail.com",
//       to: "navneetnishchal2014@gmail.com",
//       subject: "requesting mail",
//       text: body.text,
//     };

//     console.log("step 3 for sending mails");
//     transport.sendMail({
//       from: reciever.from,
//       to: reciever.to,
//       subject: reciever.subject,
//       html: body.text,
//     });
//     // transport
//     //   .sendMail({
//     //     from: sender,
//     //     to: recipients,
//     //     subject: "You are awesome!",
//     //     text: "Congrats for sending test email with Mailtrap!",
//     //     category: "Integration Test",
//     //     sandbox: true,
//     //   })
//     //   .then(console.log, console.error);
//     console.log("everything is okay now");
//     res.status(200).json({ msg: "okay" });
//   } catch (err) {
//     console.log("some error my friend while sending mail");
//     next(err);
//   }
//   //   res.status(200).json({ msg: "okay" });
// };

// export const sendMails = async (req, res, next) => {
//   const TOKEN = "2364d7a63b216d6fd085accea25195ca";
//   const SENDER_EMAIL = "navneetnishchal1420@gmail.com";
//   const RECIPIENT_EMAIL = "navneetnishchal2014@gmail.com";

//   const client = new MailtrapClient({ token: TOKEN });

//   const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };
//   console.log("mail sending step 1");
//   sendEmail(client, SENDER_EMAIL, RECIPIENT_EMAIL);
// };

// async function sendEmail(client, senderEmail, recipientEmail) {
//   try {
//     const response = await client.send({
//       from: { name: "Mailtrap Test", email: senderEmail },
//       to: [{ email: recipientEmail }],
//       subject: "Hello from Mailtrap!",
//       text: "Welcome to Mailtrap Sending!",
//     });

//     console.log("Email sent successfully:", response);
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// }

export const sendMails = async (req, res, next) => {
  const body = req.body;
  console.log("body of the eq is ", body);

  try {
    console.log("starting to send mails");
    var transport = nodemailer.createTransport({
      host: "live.smtp.mailtrap.io",
      port: 587,
      auth: {
        user: "api",
        pass: "2364d7a63b216d6fd085accea25195ca",
      },
    });
    console.log("in the middle to send mails");

    const reciever = {
      from: "info@marqstats.com",
      to: "navneetnishchal1420@gmail.com",
      subject: "requesting mail",
      text: body.text,
    };
    console.log(" second last step and email sent successfully");

    transport.sendMail({
      from: reciever.from,
      to: reciever.to,
      subject: reciever.subject,
      html: body.text,
    });
    console.log("last step and email sent successfully");

    res.status(200).json({ msg: "email sent successfully" });
  } catch (err) {
    res.status(400).json({ msg: "some error occureed" });
  }
};
