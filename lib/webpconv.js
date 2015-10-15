var exec = require('child_process').exec; //use this to execute a command

var binPath = require('./getBinPath'); //get absolute bin path of corresponding operating system

module.exports = {
    cwebp: cwebp,
    dwebp: dwebp
};

function cwebp(input, output, quality, callback) {
    //convert image of other format to webp
    var param = binPath.cwebp() + '-q ' + quality + ' ' + input + ' -o ' + output;
    execParam(param, callback);
}

function dwebp(input, output, callback) {
    //convert webp image to other format
    var param = binPath.dwebp() + ' ' + input + ' -o ' + output;
    execParam(param, callback);
}

function execParam(param, callback){
    //execute param and return result
    exec(param, function(err, stdout, stderr){
        if(err){
            callback(err);
        }else{
            callback(null, {status: 'converted successfully', stdout: stdout, stderr: stderr});
        }
    });
}
