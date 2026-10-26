import { getOsPlatform,getCpuArch} from "./module/OsInofrmation.js";
import { getBaseName, getExtName } from "./module/PathHelper.js";


const filePath = "C:/Developement/credo-systems-courses/syllabus/saravanan.txt"

const basename = getBaseName(filePath)
const extname  = getExtName(filePath)

console.log("Base Name ===>",basename)
console.log("extname ===>",extname)