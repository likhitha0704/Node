// import fs from 'fs'

// fs.writeFile("demo.txt","good afternoon",(err)=>{
//   if(err)console.log(err);
//   console.log("file written");  
// })

// fs.readFile("./demo.txt","utf-8",(err,data)=>{
//     if(err)console.log(err);
//     console.log(data)
// })

// fs.appendFile("./demo.txt","\n good afternoon",(err)=>{
//     if(err)console.log(err);
//     console.log("appended")
// })

// fs.unlink("./demo.txt","\n good afternoon",(err)=>{
//     if(err)console.log(err);
//     console.log("appended")
// })

// fs.mkdir("./txt.txt",(err)=>{
//     if(err)console.log(err)
//         console.log("hyyyyy")
// })

// fs.rmdir("./txt.txt",(err)=>{
//     if(err)console.log(err)
//         console.log("brooo")
// })




// ---------------------By using promises-------------------------
import fs from 'fs/promises'

// fs.writeFile("./text.txt","hyy man").
// then(()=>{
//     console.log("file written")
// }).catch((err)=>{
//     console.Console.log(err)
// })

// fs.readFile("./text.txt","utf-8").then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// ----------------------------Using async and await----------------------------------

async function resolvePromises(){
    try{
//    await fs.writeFile("./textt.txt","hello");
// await fs.appendFile("./text.txt","hyyyyyy");
// await fs.unlink("./textt.txt");
await fs.mkdir("./demo2.txt");
//    let data = await fs.readFile("./demo.txt","utf-8")
//    console.log(data)
    }
    catch(err){
        console.log(err)

    }
}
resolvePromises()