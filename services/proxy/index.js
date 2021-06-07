const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

require('dotenv').config()

app.use('/movies', proxy(
  `http://localhost:${process.env.MOVIES_API_PORT}`,
  {
    proxyReqPathResolver: (req) => {
      return `http://localhost:${process.env.MOVIES_API_PORT}/movies${req.url}`
    }
  }
));

app.use('/corona', proxy(
  `http://localhost:${process.env.CORONA_NEWS_API_PORT}`,
  {
    proxyReqPathResolver: (req) => {
      return `http://localhost:${process.env.CORONA_NEWS_API_PORT}/corona${req.url}`
    }
  }
));

const PORT = process.env.PORT || process.env.PROXY_SERVICE_PORT;
app.listen(PORT, err => {
  if(err) {
      return console.log('Could not start proxy service', err);
  }
  console.log(`Proxy service successfully started on port ${PORT}`);
});