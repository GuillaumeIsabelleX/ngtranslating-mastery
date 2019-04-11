var JsonFile = require('@exponent/json-file');
//@exponent/json-file
//@stcgoal Optimal management of JSON file 
//@urir https://www.npmjs.com/package/@exponent/json-file


var file = new JsonFile('package.json', {cantReadFileDefault: {}});
 
//Read the File
 file.readAsync()
.then((obj)=>
{

   //@STCAction Show up each keys
   var keys = Object.keys(obj);
   for (var i = 0; i < keys.length; i++) {
      var v = obj[keys[i]];
      console.log(v);
   }
})
.catch((err)=>{
   console.log(err);
});

