const expect = require('chai').expect;
const hexgen = require('../src/index');

const ErrorMessage = 'Invalid number of bits to generate. Bits must be a positive integer.';

describe('Hexadecimal Generator', () => {
	it('Generates a 32-bit string', () => {
		const result = hexgen(32);
		expect(result).to.match(/^[a-f0-9]+$/i).and.to.have.a.lengthOf(8);
	});

	it('Generates a 64-bit string', () => {
		const result = hexgen(64);
		expect(result).to.match(/^[a-f0-9]+$/i).and.to.have.a.lengthOf(16);
	});

	it('Generates a 256-bit string', () => {
		const result = hexgen(256);
		expect(result).to.match(/^[a-f0-9]+$/i).and.to.have.a.lengthOf(64);
	});

	it('Generates a 24-bit string', () => {
		const result = hexgen(24);
		expect(result).to.match(/^[a-f0-9]+$/i).and.to.have.a.lengthOf(6);
	});

	it('Generates a 33-bit string', () => {
		const result = hexgen(33);
		expect(result).to.match(/^[01][0-9a-f]+$/i).and.to.have.a.lengthOf(9);
	});

	it('Generates a 34-bit string', () => {
		const result = hexgen(34);
		expect(result).to.match(/^[0-3][0-9a-f]+$/i).and.to.have.a.lengthOf(9);		
	});

	it('Generates a 35-bit string', () => {
		const result = hexgen(35);
		expect(result).to.match(/^[0-7][0-9a-f]+$/i).and.to.have.a.lengthOf(9);		
	});

	it('Will generate a 64-bit string by default', () => {
		const result = hexgen();
		expect(result).to.match(/^[a-f0-9]+$/i).and.to.have.a.lengthOf(16);
	});

	it('Will fail if bits is zero', () => {
		expect(() => hexgen(0)).to.throw(ErrorMessage);
	});

	it('Will fail if bits is negative', () => {
		expect(() => hexgen(-32)).to.throw(ErrorMessage);
	});

	it('Will fail if bits is not a number', () => {
		expect(() => hexgen('seven')).to.throw(ErrorMessage);
	});

	it('Will fail if bits is not an integer', () => {
		expect(() => hexgen(64.2)).to.throw(ErrorMessage);
	});
});
