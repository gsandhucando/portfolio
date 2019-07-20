const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const env = require('dotenv');

env.config()

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_KEY);

app.post("/email", (req, res) => {
  console.log(req.body, process.env.SENDGRID_KEY)
  let emailMessage = req.body.text + '\nfrom: ' + req.body.name + '\nphone number: ' + req.body.number;
  let htmlMessage = req.body.text + '<br>from: ' + req.body.name + '<br>phone number: ' + req.body.number;
  const msg = {
    to: 'gsandhu916@gmail.com',
    from: req.body.from,
    subject: 'contact from ' + req.body.name,
    text: emailMessage,
    html: `<p>${htmlMessage}</p>`,
  };
  sgMail.send(msg);
  res.send('Email was successful!')
})


app.listen(port, () => {
  console.log(`we are up on port: ${port}`);
});