import fs from 'fs'
import EventEmitter from 'events'

export const FileEvent = new EventEmitter()

FileEvent.on("textfile",()=>{
    fs.writeFileSync("saravanan.txt","Hello Saravanan")
})

FileEvent.on("textfile",()=>{
    const  filedata = fs.readFileSync("saravanan.txt","utf8")
    console.log("File Data ===>",filedata)
})

