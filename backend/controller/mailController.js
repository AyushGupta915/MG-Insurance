const nodemailer = require('nodemailer');

const sendQuoteMail = async (req, res) => {
  const { name, email, phone, type, duration, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.MY_EMAIL,
      subject: `New Insurance Quote from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Duration:</strong> ${duration}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Quote email sent successfully' });
  } catch (error) {
    console.error('Mail error:', error);
    res.status(500).json({ message: 'Email sending failed' });
  }
};

module.exports = { sendQuoteMail };
