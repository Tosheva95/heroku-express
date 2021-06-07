const express = require('express');
const app = express();

require('dotenv').config()


app
  .get('/corona', (req, res) => {
    res.send('Corona News');
  })

  app.listen(`${process.env.CORONA_NEWS_API_PORT}`, (error) => {
    if (error) {
      return console.log(
        `Error happened while starting the app on port ${process.env.CORONA_NEWS_API_PORT}`,
        error
      );
    }
    console.log(`Corona News service successfully started on port ${process.env.CORONA_NEWS_API_PORT}`);
  });