import { log } from 'console'
import express from 'express'
//creates an express application. 
// The express() function is a top-level function exported by the express module.
let app = express()

app.get("/home",(req,res)=>{
    res.send("Hello world!!")
})

app.listen(5000,(err)=>{
    console.log("Server is on 5000....");
    
})