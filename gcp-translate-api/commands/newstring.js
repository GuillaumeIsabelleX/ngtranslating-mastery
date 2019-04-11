

const path = require('path');
const fs = require('fs');
var nsset = require('nsset');
var JsonFile = require('@exponent/json-file');
const { Translate } = require('@google-cloud/translate');


// Instantiates a client
const translate = new Translate({
});


//@STCgoal Add a new string to the Translation
//

/* /commands/newstring.js */
exports.default = {
    cmd: __filename,
    args: ['textSource', 'targetObject'],
    options: [
        ['-f', '--force', 'Override it!'],
        ['-t', '--source', 'English text source to translate'],
        ['-l', '--lang', 'target language']
        ['-i', '--init', 'Init a new lang - reads all english string and create the new. use with --lang']
    ],
    description: 'Add a new string to all translation files.\n--------------------------------\n'
        + '#> transapp newstring "hello world" "HOME.GREETING"'
    ,
    action: (txt, target, options) => {
        console.log("New Text : " + txt);
        console.log("Namespace : " + target);
        console.log(options);


        //Assuming you runs from the root of your app.

        var i18nroot = "/src/assets/i18n";

        //@a Reads all file in there


        readTransation()
            .then((files) => {
                //listing all files using forEach
                files.forEach(function (file) {
                    // Do whatever you want to do with the file
                    var filePath = i18nroot + '/' + file;
                    var langCode = file.replace(".json", "");
                    console.log(filePath);

                    var fileTranslation = new JsonFile(filePath, { cantReadFileDefault: {} });


                    //Read the translation File
                    fileTranslation.readAsync()
                        .then((obj) => {


                            if (langCode != "en") {
                                // Translates some text into Russian
                                translate
                                    .translate(txt, langCode)
                                    .then(results => {
                                        const translation = results[0];

                                        //Adds a dummy value to test translation files
                                        nsset.set(target, obj, translation);

                                        //@STCgoal Writes the new JSON file
                                        fileTranslation.writeAsync(obj);

                                        console.log(`Text: ${txt}`);
                                        console.log(`Translation: ${translation}`);
                                    })
                                    .catch(err => {
                                        console.error('ERROR:', err);
                                    });
                            }
                            else { //@status IS ENGLISH Original, not requiring translation

                                //Adds a dummy value to test translation files
                                nsset.set(target, obj, txt);

                                //@STCgoal Writes the new JSON file
                                fileTranslation.writeAsync(obj);
                            }


                        })
                        .catch((err) => {
                            console.log(err);
                        });


                    // var obj = require(filePath);
                    // // var obj = JSON.parse(t);
                    // var keys = Object.keys(obj);
                    // for (var i = 0; i < keys.length; i++) {
                    //    var v = obj[keys[i]];
                    //    console.log(v);
                    // }
                });
                console.log(`
               Angular HTML Use:
               {{ '${target}' | translate }}
               `);
            })
            .catch((err) => {
                console.log(err);
            });





        return 1;
    }
};













/**
 * Reads the directory
 */
function readTransation() {
    return new Promise(function (resolving, rejecting) {

        //joining path of directory 
        const directoryPath = path.join(__dirname, i18nroot);

        //passsing directoryPath and callback function
        fs.readdir(directoryPath, function (err, files) {
            //handling error
            if (err) {
                rejecting(err);
                return console.log('Unable to scan directory: ' + err
                    + "\n Might want to run from your root app dir"
                );
            }

            resolving(files);
        });
    });
}
