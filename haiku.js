var fs = require('fs');

function readFile(file){
	return fs.readFileSync(file).toString();
}
//format the dictionary into an array of sub-arrays sorted by number of syllables.  For example words[3] is an array of all the 3-syllable words in the data
function formatData(data){
	var lines = data.toString().split("\n"), 
		lineSplit,
		words =[[]];
	lines.forEach(function(line){
		lineSplit = line.split("  ");
		if(lineSplit[1] == null ||lineSplit[1] == undefined || lineSplit[1].match(/\d+/g) === null ){
			words[0].push(lineSplit[0])
		} else {
			var syllab = lineSplit[1].match(/\d+/g).length;
			if(words[syllab] === undefined){
				words[syllab] =[];
			}
				words[syllab].push(lineSplit[0]);
		}
		
	});
	return words;
}

function createHaiku(structure, textFile){
	var text = readFile('./' + textFile);
	var textArr = formatData(text);
	var haikuArr =[];
	for (var i = 0; i < structure.length; i ++){ 
		if(typeof structure[i] != "object"){
		
		var index = Math.floor(Math.random() * textArr[structure[i]].length -1);
		haikuArr.push(textArr[structure[i]][index]);
		} else {
			var lineArr = [];
			for (var j = 0; j < structure[i].length; j ++){
				index = Math.floor(Math.random() * textArr[structure[i][j]].length -1);
				lineArr.push(textArr[structure[i][j]][index]);
			}
			haikuArr.push(lineArr.join(' '));
		}
	}
	return haikuArr.join(" \n");
		}
	
	



module.exports = {
	createHaiku: createHaiku,
}
