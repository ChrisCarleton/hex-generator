const ErrorMessage = 'Invalid number of bits to generate. Bits must be a positive integer.';

module.exports = function(bits) {
	if (bits === undefined) {
		bits = 64;
	}

	if (!Number.isInteger(bits) || bits < 1) {
		throw new Error(ErrorMessage);
	}

	const nibbles = Math.floor(bits / 4);
	const remainder = bits % 4;
	let hex = '';

	if (remainder) {
		hex = Math.floor(Math.random() * (2 ^ remainder - 1)).toString(16);
	}

	for (let i = 0; i < nibbles; i++) {
		hex += Math.floor(Math.random() * 15).toString(16);
	}

	return hex;
}
