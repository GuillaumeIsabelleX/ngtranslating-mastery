var translator = require('./x-modulestranslating.js');

var text = "Hello world is much more a common phrase we hear a lot when we code.";
var target = "ru";

translator.translate(text, target)
	.then((res) => {
		console.log(text + "\n\t\t In: " + target);
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});

