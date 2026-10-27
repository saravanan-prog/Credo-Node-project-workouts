import fs from "fs";

export const extractFileData = (filename) => {
  try {

    return {
        statusCode :200,
        statusMessage :"Success",
        data : fs.readFileSync(filename, "utf8")
    }


  } catch (error) {

    return {
        statusCode : 404,
        statusMessage: "File Not found"
    }
  }
}


export const writeContentInFile = (filename,content) => {
    try{
        if(content!=null){
            fs.writeFileSync(filename,content)
            const fileContent = extractFileData(filename)
            return {
                statusCode : 200,
                statusMessage:"Success",
                content : fileContent.data
            }
        }
            
        else{
            return "Please Add a content"
        }
            

    }
    catch (error) {
        return {
            statusCode : 404,
            statusMessage:"FILE NOT FOUND",
                
        }
    }
}

export const appendTheContent = (filename,content) => {
     try{
        if(content!=null){
            fs.appendFileSync(filename,content)
            const fileContent = extractFileData(filename)
            return {
                statusCode : 200,
                statusMessage:"Success",
                content : fileContent.data
            }
        }
            
        else{
            return "Please Add a content"
        }
            

    }
    catch (error) {
        return {
            statusCode : 404,
            statusMessage:"FILE NOT FOUND",
                
        }
    }
}

export const deleteFile = (filename) => {
    try{
        if(filename !=null){
            fs.unlinkSync(filename)
            return {
                statusCode: 200,
                statusMessage : "File Deteted success"
            }
        }
        else
            return "file name is empty"
    }
    catch(error){

    }
}

export const createDirectory = (folderName) => {
    try{
        fs.mkdirSync(folderName);
        return {
            statusCode: 200,
            statusMessage : "success",
            data : "Folder is Crated"
        }
    }
    catch{
         return {
            statusCode: 409,
            statusMessage : "Failed",
            data : "Folder name already exist"
        }
    }
    

    
   
   
}