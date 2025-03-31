import express from 'express'
let app = express()
//parse

//auth
   
//route
 
 app.use(function(req,res,next){
    console.log("parse the incoming body");
    next()
    }, function(req,res,next){
        console.log("auth successfull");
        next()
    })
 app.get("/home",function (req,res,next){
    res.send("Home page")
 })
 app.listen(5000,(err)=>{
    console.log("Server is on 5000....")
 })