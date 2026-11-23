
setTimeout(()=>{
    console.log("Set Timeout processing..500ms")
})



setTimeout(()=>{
    console.log("Set Timeout processing..2000ms")
},2000)



setImmediate(()=>{
    console.log("SET Immedidate is processing....")
},9000)

process.nextTick(()=>{
    console.log("Process next tick  is processing....")
},150000)