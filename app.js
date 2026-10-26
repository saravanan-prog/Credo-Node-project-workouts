const { getCurrentDirectory, getCurrentFileDirectory }  = require("./module/globalObject")
const sumOfResult = require("./module/Calculator")


const directoryName = getCurrentDirectory()
const fileDirectory = getCurrentFileDirectory()
const additionResult   = sumOfResult(100,100)


console.log("directoryName====>",directoryName)
console.log("fileDirectory====>",fileDirectory)
console.log("additionResult====>",additionResult)