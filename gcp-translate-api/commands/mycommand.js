/* /commands/subcmd1.js */
exports.default = {
    cmd: __filename,
    args: ['arg1', '?arg2'],
    options: [
        ['-f','--force', 'Override it!'],
        ['--port','--port comport com4', 'Select your COMPort.']
    ],
    description: 'My awsome command',
    action: (arg1, arg2, options) => {
        console.log("first arg : " + arg1);
        console.log("2 arg : " + arg2);
        console.log(options);
        return 1;
    }
};