// let bufferFromString = Buffer.from("hello");
// console.log(bufferFromString);

let allocatedBuffer = Buffer.alloc(8);
console.log(allocatedBuffer);
allocatedBuffer.write("hello");
console.log(allocatedBuffer);