//@STCGoal That a object hierarchy and value can be specified by a Namespace
//@cr mycmd "hello world" TARGET.MYVAL
//
var txt = "hello world";
var target = "HOME.FOOTER.MYNOTES";

var o = new Object();
 
o.whatever = "something";

var r = 
initializeNS(target, o,txt);
 



console.log("Object created :" );
console.log(o);
console.log("Reference created in the object :" );
console.log(r);


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