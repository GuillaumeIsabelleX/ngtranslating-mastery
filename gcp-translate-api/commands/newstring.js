 
const path = require('path');
const fs = require('fs');
var nsset = require('nsset');
var JsonFile = require('@exponent/json-file');
const { Translate } = require('@google-cloud/translate');

var verbose = 0;



// Instantiates a client
const translate = new Translate({
});


//@STCgoal Add a new string to the Translation
//
//Assuming you runs from the root of your app.

var currentPath = process.cwd();

var i18nroot =path.join(currentPath, "/src/assets/i18n" );
// console.log(__dirname);

// __dirname + "/src/assets/i18n";

/* /commands/newstring.js */
exports.default = {
    cmd: __filename,
    args: ['txt', 'target'],
    options: [
        ['-f','--force', 'Override it!'],
        ['-v','--verbose', 'verbose'],
        ['--port','--port comport com4', 'Select your COMPort.'],
        ['-t','--source','English text source to translate'],
        ['-l','--lang','target language']
    ],
    description: 'Add a new string to all translation files.\n--------------------------------\n'
        + '#> transapp newstring "hello world" "HOME.GREETING"'
    ,
    action: (txt, target,options) => {
        return new Promise(function (resolve, reject) {
        if (options.verbose) verbose = options.verbose;

          if (verbose > -1)  {console.log("New Translated Text String  :\n\t " + txt);
            console.log("Namespace Target : \n\t" + target);}
           // console.log(options);



            //@a Reads all file in there


            readTransation()
                .then((files) => {
                    //listing all files using forEach
                    files.forEach(function (file) {
                        // Do whatever you want to do with the file
                        var filePath = i18nroot + '/' + file;
                        var langCode = file.replace(".json", "");
                        if (verbose > 0)  console.log(filePath);

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

                                            if (verbose > 0)   {
                                                console.log(`Text: ${txt}`);
                                            console.log(`Translation: ${translation}`);
                                        }

                                        })
                                        .catch(err => {
                                            console.error('ERROR:', err);
                                            reject(err);
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
                                reject(err);
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

                    resolve(txt);
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);
                });





        });
    }
};













/**
 * Reads the directory
*/
function readTransation() {
    return new Promise(function (resolving, rejecting) {

        //joining path of directory 
        const directoryPath = i18nroot;
        //path.join(__dirname, i18nroot);

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

