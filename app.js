

import { appendTheContent, deleteFile, extractFileData,writeContentInFile,createDirectory } from "./module/FileModule.js";




const dirResp = createDirectory("Teachers")


if(dirResp.statusCode == 200){

    const content = `
        Ravi is a developer
        He is a selfish
        He is not teaching anyone
    `
    const writeResp = writeContentInFile("Teachers/Ravi.txt",content)

    console.log("writeResp===>",writeResp)

}
else{
    console.log(dirResp.statusMessage)
}

