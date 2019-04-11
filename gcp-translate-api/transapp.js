
const path = require('path');
const fs = require('fs');
//

//Assuming you runs from the root of your app.

var i18nroot = "./src/assets/i18n";

//@a Reads all file in there


readTransation()
   .then((files) => {
      //listing all files using forEach
      files.forEach(function (file) {
         // Do whatever you want to do with the file
         console.log(file);
         var obj = require(i18nroot + '/' + file);

        // var obj = JSON.parse(t);
         var keys = Object.keys(obj);
         for (var i = 0; i < keys.length; i++) {
            var v = obj[keys[i]];
            console.log(v);
         }
      });
   })
   .catch((err) => {
      console.log(err);
   });





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
