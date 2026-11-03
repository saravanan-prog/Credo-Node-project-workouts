import os from 'os'

export const getOsPlatform = () => {
    const osInformation = "Your os Platform is====>" +  os.platform()
    return osInformation
}
export const getCpuArch = () => {
    const arch = "Your Cpu Arch is ====>" + os.arch()
    return arch
}