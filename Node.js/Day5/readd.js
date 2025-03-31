import fs from 'fs'
import zlib from 'zlib'

let readStream=fs.createReadStream("./india.txt")
let gzip = zlib.createGzip()
let writeStream = fs.createWriteStream("./file.gz")

readStream.pipe(gzip).pipe(writeStream)

// let readStream = fs.createReadStream("./demo.txt",{
//     highWaterMark :3,
//     encoding: "utf-8"
// })

// readStream.on("data",(chunk)=>{
//     console.log(chunk)
// })

// let writeStream = fs.createWriteStream("test.txt")

// writeStream.write("hello good afternoon", (err)=>{
//     if(err)console.log(err);
//     console.log("file written")
// })

