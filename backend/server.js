const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors({
  origin: 'https://mg-insurance.vercel.app',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

const mailRoute = require('./routes/mailRouter');
const contactRoute = require('./routes/contactRouter');
app.use('/api', mailRoute);
app.use('/api', contactRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
