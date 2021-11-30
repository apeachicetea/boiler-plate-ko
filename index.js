const express = require('express')
//express 모듈을 가져옴
const app = express()
//새로운 express 앱을 만듬
const port = 5000
//포트는 자유롭게 사용 가능
const { User } = require('./models/User');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://eodbszla:1q2w3e4r@cluster0.7lq41.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  .then(()=>console.log('MongoDB Connected...'))
  .catch((err)=>console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res)=>{
  //회원 가입 할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣어준다.
  const user = new User(req.body);
  console.log(user);

  user.save((err, userInfo)=>{
    if(err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})