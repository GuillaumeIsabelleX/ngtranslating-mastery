//@STCgoal Add a new string to the Translation
//

/* /commands/newstring.js */
exports.default = {
   cmd: __filename,
   args: ['textSource','targetObject'],
   options: [
       ['-f','--force', 'Override it!'],
       ['-t','--source','English text source to translate'],
       ['-l','--lang','target language']
   ],
   description: 'Add a new string to all translation files.\n--------------------------------\n'
   + '#> transapp newstring "hello world" "HOME.GREETING"'
   ,
   action: (arg1, arg2, options) => {
       console.log("first arg : " + arg1);
       console.log("2 arg : " + arg2);
       console.log(options);
       return 1;
   }
};