const express = require('express');
const app = express();

require('dotenv').config()


app
  .get('/movies', (req, res) => {
    res.send('Movies');
  })

  app.listen(`${process.env.MOVIES_API_PORT}`, (error) => {
    if (error) {
      return console.log(
        `Error happened while starting the app on port ${process.env.MOVIES_API_PORT}`,
        error
      );
    }
    console.log(`Movies service successfully started on port ${process.env.MOVIES_API_PORT}`);
  });