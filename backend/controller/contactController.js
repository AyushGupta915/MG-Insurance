const nodemailer = require('nodemailer');

const sendContactMail = async (req, res) => {
  const { name, email, message } = req.body;

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
      subject: `New Contact Message from ${name}`,
      html: `
        <h3>Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br />${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Contact email sent' });
  } catch (err) {
    console.error('Contact mail error:', err);
    res.status(500).json({ message: 'Failed to send message' });
  }
};

module.exports = { sendContactMail };
