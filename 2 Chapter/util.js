//Formats the specified string, using the specified arguments
import util from 'util';

var txt = 'Congratulate %s on his %dth birthday!';
var result = util.format(txt, 'Linus', 6);

console.log(result);