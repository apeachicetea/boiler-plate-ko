const express = require('express')
//express 모듈을 가져옴
const app = express()
//새로운 express 앱을 만듬
const port = 5000
//포트는 자유롭게 사용 가능

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://eodbszla:1q2w3e4r@cluster0.7lq41.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(()=>console.log('MongoDB Connected...'))
  .catch((err)=>console.log(err));



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})