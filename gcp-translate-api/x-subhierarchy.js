//@STCGoal Add an object hierarchy and value can be specified by a Namespace
//@cr mycmd "hello world" TARGET.MYVAL
//@urir https://stackoverflow.com/questions/2308783/building-object-hierarchy-from-a-namespace-string/2308848#2308848

//
var txt = "hello world";
var target = "HOME.FOOTER.MYNOTES";

var o = new Object();
 
o.whatever = "something";

var r = 
initializeNS(target, o,txt);
 



console.log("----LOCATESTING----");
console.log("Object created :" );
console.log(o);
console.log("Reference created in the object :" );
console.log(r);

console.log("----CREATED LIB TESTING nsset----");
var nsset = require('nsset');

var o2 = new Object();
 
o2.whatever = "something";
nsset(target,o2,txt);
console.log("Object created :" );
console.log(o2);





function initializeNS(ns, obj,val) {
   var global = (function () { return this;})(), // reference to the global object
       levels = ns.split('.'), first = levels.shift();
   obj = obj || global; //if no object argument supplied declare a global property
   obj[first] = obj[first] || {}; // initialize the "level"
   if (levels.length) { // recursion condition
     initializeNS(levels.join('.'), obj[first],val);
   }
   else obj[first] = val;
      
   return obj[first]; // return a reference to the top level object
 }