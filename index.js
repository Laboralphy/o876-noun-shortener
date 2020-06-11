const Abbr = require('./Abbr');
const oAbbr = new Abbr();

function shorten(s) {
	return oAbbr.make(s);
}

module.exports = {
	shorten
};
