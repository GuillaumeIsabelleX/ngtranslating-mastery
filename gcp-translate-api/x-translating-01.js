// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate');
 
 
// Instantiates a client
const translate = new Translate({
});
 
// The text to translate
const text = 'Hello, world! There is much more that just saying hello that is possible when you have a creative orientation.';
// The target language
const target = 'de';
 
// Translates some text into Russian
translate
  .translate(text, target)
  .then(results => {
    const translation = results[0];
 
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
