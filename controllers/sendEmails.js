const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')

const sendEmailEthereal = async (req, res) => {
  // Generate SMTP service account from ethereal.email
  let testAccount = await nodemailer.createTestAccount()

  // Create a SMTP transporter object
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'laurie.gerlach32@ethereal.email',
      pass: 'Qg7c9QZSmjJWvYypeM',
    },
  })

  // Message object
  let info = await transporter.sendMail({
    from: ` 'Sahil Khatri' <sahilkeshav1997@gmail.com> `,
    to: 'bar@example.com, baz@example.com',
    subject: 'Hello from NODEMAILER...',
    html: `<h2>Sending emails with node.js...</h2>`,
  })

  res.json(info)
}

// SENDING EMAIL WITH SENDGRID
const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  // MESSAGE OBJECT
  const msg = {
    to: 'regigew717@mediafate.com', // Change to your recipient || temp-mail
    from: 'sahilkeshav1997@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

  const info = await sgMail.send(msg)
  res.json(info)
}

module.exports = sendEmail
