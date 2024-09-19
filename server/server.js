const express = require("express");
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const user = require('./userDetails.model')
const cors = require ('cors');
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");
const userAuth = require("./usercontroller.js");
const {account,id} = require("./aapwriteConfig.js")





const app = express();
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
const PORT = 8080
const db = 'mongodb://127.0.0.1:27017/user'
mongoose.connect(db)
  .then(() => console.log('db connected'))
  .catch((err) => console.log(err)
  )







app.post('/register', async (req, res) => {
  const { username, email, password, mobile } = req.body
  try {
    await user.create({
      username,
      email,
      password,
      mobile,

    })
  
    res.json({ status: "ok", message: " user successfully created" })


  } catch (error) {
    res.send(`error:${error}`)


  }





})
app.post('/login', async (req, res) => {  
    const { email, password } = req.body
    const payload ={email,password}
    const isUser = await user.findOne({ email, password, })
    console.log(isUser);
    const token =jwt.sign(payload,'iamtheknight')

    
    if(!isUser){
    res.json({status:401,message:"unauthorized"})}
    else{
    res.json({status:200,message:"success"})}
  


})
app.get('/home', async(req, res) => {
  const allusers = await user.find({})
  res.json(allusers)
})









app.listen(PORT, () => console.log(`server listening on ${PORT}`));
app.get("/", (req, res) => {
  res.send("home page");
});
