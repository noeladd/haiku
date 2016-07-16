var fs = require('fs');


function createHaiku(structure){
	console.log("this should log a haiku with the structure " + structure);
}

module.exports = {
	createHaiku: createHaiku,
}
