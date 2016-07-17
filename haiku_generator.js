var fs = require('fs');
var haiku = require('./haiku');
//createHaiku will take any file in a similar format to the cmuDict, I just haven't found one yet.  It will also take any array of arrays to create different patterns of poems by syllables
console.log(haiku.createHaiku([5, 7, 5], 'cmuDict.txt'));