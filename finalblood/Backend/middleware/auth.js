// authenticating and authorizing incoming requests
const jwt = require("jsonwebtoken");
const mongoose= require("mongoose");
mongoose.connect(process.env.mongo_url);
const connection = mongoose.connection;
function auth(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ errorMessage: "Unauthorized" });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified.user;

    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }
}

//verify connection
connection.on('connected', ()=>{
  console.log('Mongo DB Connection Successful')
})

//verify connection error
connection.on('error', (err)=>{
  console.log('Mongo DB connection Error', err)
}) 
module.exports = auth;