import http from 'http'

let server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.statusMessage = "Okay";
    res.setHeader("content-type","text/plain")
    // to write in one line
    // res.writeHead(200,"Okay",{"content-type:"text/plain"})
    
    res.write("hyy hii");
    res.end()
})

server.listen(5000,()=>{
    console.log("server is on....")
})