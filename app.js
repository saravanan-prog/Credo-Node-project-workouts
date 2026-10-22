setTimeout(()=> console.log("time out"),1000)

process.nextTick(() => console.log("process tick"),3000);