
// Imports the Google Cloud client library
const { Translate } = require('@google-cloud/translate');

// Instantiates a client
const translate = new Translate({
});

//@stcgoal var translator = require('./this.js'); tranlator.translate("my english string","ru").then((res){...});
module.exports.translate = function (englishSource, targetLang, verbosing = false) {
  return new Promise((resolve, reject) => {

    var text = englishSource;
    var target = targetLang;

    // Translates some text into Russian
    translate
      .translate(text, target)
      .then(results => {
        const translation = results[0];
        

        if (verbosing) {
          console.log(`Text: ${text}`);
          console.log(`Translation: ${translation}`);
        }
        resolve(translation);
      })
      .catch(err => {
        console.error('ERROR:', err);
        reject(err);
      });

  });
};

