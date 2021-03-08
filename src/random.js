const crypto = require('crypto');

function randomNumber(length){
	return parseInt(crypto.randomBytes(length).toString('hex'));
}

function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

module.exports = {
    randomNumber,
    randomRange
}