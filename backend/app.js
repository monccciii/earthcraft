const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getnations', (req, res) => {
    res.send('Hello World!')
  })  
  app.get('/getbusinesses', (req, res) => {
    res.send('Hello World!')
  })  

