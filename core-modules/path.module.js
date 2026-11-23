import path from 'path'

export const getDirname = (filePath) => {
    return path.dirname(filePath)
}
export const getExtName = (filePath) => {
    return  path.extname(filePath)
}
export const getBaseName = (filePath) => {
    return path.basename(filePath)
}