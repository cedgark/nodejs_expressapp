const express = require('express');

const app = express()

const {readFile} = require('fs');

app.get('/',(request, response) => {
  readFile('./home.html','utf-8',(err,html) => {

    if (err) {
      response.status(500).send('sorry out of order') //server error
    }

    response.send(html)
  })
})

app.listen(process.env.PORT || 3000, () => console.log('App is available on http://localhost:3000'))
