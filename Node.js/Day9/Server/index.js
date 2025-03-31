import {createServer} from 'http'

let server = createServer((req,res)=>{
    let employees = [
        {
            name:"Rajath",
            esal:20000,
            skills:["htrml","css"]
        },
        {
          name:"prajwal",
          esal:30000,
          skills:["python","C#"]
        }
    ]
    res.writeHead(200,"Okay",{"content-type":"application/json",
        // "access-control-allow-origin":"http://127.0.0.1:5500/Client/index.html",
        "access-control-allow-origin":"*"
    })
    res.end(JSON.stringify(employees))
})
server.listen(8080,()=>console.log("server is on 8080"))