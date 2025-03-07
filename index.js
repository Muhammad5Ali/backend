const express = require('express')
require ('dotenv').config()
// import express from "express"
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
res.send('hiteshdotcom')
})
app.get('/tweet',(req,res)=>{
    res.send('hit')
    })
app.get('/sign-in',(req,res)=>{
 res.send('<h1>You are logged-In </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})