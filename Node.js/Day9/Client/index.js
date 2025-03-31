async function getEmployeedata(){
    try{
let res = await fetch("http://localhost:8080")
let data = await res.json();
console.log(data)
}
    catch{
   error("err")
    }
}
getEmployeedata()
