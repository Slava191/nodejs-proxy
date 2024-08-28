const express = require('express');
const axios = require('axios');
const cors = require('cors');
const https = require('https');
const httpsOptions = require('./https-options');
const app = express();

require('dotenv').config()

const targetUrl = process.env.TARGET_URL;

app.use(cors())

app.use(async (req, res) => {
  try {
    const url = `${targetUrl}${req.originalUrl}`;

    const options = {
      method: req.method,
      headers: { ...req.headers, host: new URL(targetUrl).host },
      url: url,
      data: req.body
    };

    const response = await axios(options);

    res.status(response.status).send(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).send(error.response.data);
    } else {
      res.status(500).send({ error: 'Internal server error' });
    }
  }
});

const port = process.env.PORT;

https.createServer(httpsOptions, app).listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});