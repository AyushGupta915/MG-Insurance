const express = require('express');
const router = express.Router();
const { sendQuoteMail } = require('../controller/mailController');

router.post('/send-quote', sendQuoteMail);

module.exports = router;
