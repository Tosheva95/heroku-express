const express = require('express');

const app = express();

app
  .get('/', (req, res) => {
    res.send('Heroku');
  })
  .get('/test',(req, res)=> {
    res.send('Heroku test');
  })

app.listen(process.env.PORT || 3000)