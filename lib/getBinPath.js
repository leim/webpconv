
var path = require('path');

module.exports = {
    cwebp: cPath,
    dwebp: dPath
};

function cPath() {
    //get path of cwebp of different operating system
    if (process.platform === 'darwin') {
        //os x
        return path.join(__dirname, 'bin', 'osx', 'cwebp');
    } else if (process.platform === 'linux') {
        //linux
        return path.join(__dirname, 'bin', 'linux', 'cwebp');
    } else if (process.platform === 'win32') {
        //windows
        if (process.arch === 'x64') {
            //arch x64
            return path.join(__dirname, 'bin', 'win_64', 'cwebp.exe');
        } else {
            //arch x86
            return path.join(__dirname, 'bin', 'win_32', 'cwebp.exe');
        }
    } else {
        //exception, non supported operating system
        throw({message: 'Unsupported platform:', platform: process.platform, arch: process.arch});
    }
}

function dPath() {
    //get path of dwebp of different operating system
    if (process.platform === 'darwin') {
        //os x
        return path.join(__dirname, 'bin', 'osx', 'dwebp');
    } else if (process.platform === 'linux') {
        //linux
        return path.join(__dirname, 'bin', 'linux', 'dwebp');
    } else if (process.platform === 'win32') {
        //windows
        if (process.arch === 'x64') {
            //arch x64
            return path.join(__dirname, 'bin', 'win_64', 'dwebp.exe');
        } else {
            //arch x86
            return path.join(__dirname, 'bin', 'win_32', 'dwebp.exe');
        }
    } else {
        //exception, non supported operating system
        throw({message: 'Unsupported platform:', platform: process.platform, arch: process.arch});
    }
}
