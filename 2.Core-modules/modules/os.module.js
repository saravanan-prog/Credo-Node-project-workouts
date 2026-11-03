import os from 'os'

export const getOsPlatform = () => {
    const osInformation = os.platform()
    return osInformation
}
export const getCpuArch = () => {
    const arch =  os.arch()
    return arch
}