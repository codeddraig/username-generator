const nouns = require('./nouns.json');
const adjectives = require('./adjectives.json');

module.exports.generateUsername = function (separator, length) {
	if(!separator) separator = "";
	const noun = nouns[Math.floor(Math.random() * nouns.length)];
	const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

	let result = noun + separator + adjective;
	
	if (length) {
		result = result.substring(0, length);
	}
	return result
};
