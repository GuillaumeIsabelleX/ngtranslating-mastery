/* /commands/subcmd1.js */
exports.default = {
    cmd: __filename,
    args: ['arg1', '?arg2'],
    options: [
        ['-f','--force', 'Override it!'],
        ['--port','--port comport com4', 'Select your COMPort.'],
        ['-t','--source','English text source to translate'],
        ['-l','--lang','target language']
    ],
    description: 'My awsome command\n\tIt will greatly help creating command line.\n--------------------------------\n',
    action: (arg1, arg2, options) => {
        console.log("first arg : " + arg1);
        console.log("2 arg : " + arg2);
        console.log(options);
        return 1;
    }
};