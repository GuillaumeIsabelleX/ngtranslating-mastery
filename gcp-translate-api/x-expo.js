var JsonFile = require('@exponent/json-file');
//@exponent/json-file
//@stcgoal Optimal management of JSON file 
//@urir https://www.npmjs.com/package/@exponent/json-file

//reads the JSON file
var file = new JsonFile('dummy.json', {cantReadFileDefault: {}});
 
//Read the File
 file.readAsync()
.then((obj)=>
{
   //Adding new keys and value to the json file
   obj.mynewkey = "something";
   obj.mynewroot = new Object();
   obj.mynewroot.myval = "a new subchild";

   //@STCAction Show up each keys
   var keys = Object.keys(obj);
   for (var i = 0; i < keys.length; i++) {
      var v = obj[keys[i]];
      console.log(v);
   }

   //@STCgoal Writes the new JSON file
   file.writeAsync(obj);

})
.catch((err)=>{
   console.log(err);
});

