import FormData from "form-data";
import Mailgun from "mailgun.js";
import dotenv from "dotenv";
dotenv.config();

// Configure Mailgun Client
const mailgun = new Mailgun(FormData);

// Our sandbox domain form mailgun
const sandbox = process.env.MAILGUN_DOMAIN;

// When send mail gets no parameter use this default setup
const defaultOptions = {
  to: ["alpaycelik91@gmail.com"],
  subject: "Hello",
  html: "<h1>Testing some Mailgun awesomeness!</h1>",
};

// Mailgun client cache
// on first run we create a mailgun client
// once the client is created we can skip this
// process
let mg;

export const sendMail = ({ to, subject, html } = defaultOptions) => {
  if (!mg) {
    mg = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY,
    });
  }

  return mg.messages.create(sandbox, {
    from: `Excited User <mailgun@${sandbox}>`,
    to: to,
    subject: subject,
    html: html,
  });
};
