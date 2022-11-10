const express = require("express")
const app = express()
require("dotenv").config({
  path: ".env"
})
const cloudinary = require("cloudinary").v2
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})

console.log(process.env.CLOUD_NAME);

const uploadUserImage = async (req, res) => {
  const result = await cloudinary.uploader.upload()
}

app.get("/", (req, res)=>{
  res.status(200).json({
    success: true
  })
})

app.listen(4000, ()=>{
  console.log("Server is listening on part 4000");
})