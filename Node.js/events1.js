import { log } from "console";
import EventEmitter from "events";

let emitter = new EventEmitter()

emitter.once("some-event",()=>{
    console.log("this get executed only once")
});

// emitter.emit ("some-event")
// emitter.emit("some-event")

console.log(emitter.listenerCount("some-event"))