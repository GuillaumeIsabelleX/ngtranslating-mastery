var JsonFile = require('@exponent/json-file');
//@exponent/json-file

var file = new JsonFile('package.json', {cantReadFileDefault: {}});

//var obj = JSON.parse(file);
 file.readAsync()
.then((obj)=>
{

   
   var keys = Object.keys(obj);
   for (var i = 0; i < keys.length; i++) {
      var v = obj[keys[i]];
      console.log(v);
   }
});