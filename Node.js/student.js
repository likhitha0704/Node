import { log } from 'console';
import EventEmitter from 'events';

class Myclass extends  EventEmitter{}

let student= new Myclass();

//Parents

student.on("result" ,(grade)=>{
    if(grade==="distinction"){
        console.log("Parents are happy")
    } else{
        console.log("Parents are sad")
    }
    })
    student.on("result" ,(grade)=>{
        if(grade==="distinction"){
            console.log("relatives are jealous")
        } else{
            console.log("relatives are jealous")
        }
        })
        student.on("result" ,(grade)=>{
            if(grade==="distinction"){
                console.log("lets party")
            } else{
                console.log("lets party")
            }
            })
            student.emit("result","fail")