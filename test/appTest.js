const assert = require('chai').assert;
const aritGeo = require('../app.js');

describe("aritGeo", function() {

	describe("check if input is arithmetic sequence", function(){
		it("should return Arithmetic", function(){
			assert.equal(aritGeo([1,2,3,4,5,6]), 'Arithmetic');
		});
	});

	describe("check if input is geometric sequence", function(){
		it("should return Geometric", function(){
			assert.equal(aritGeo([1,2,4,8,16,32]), 'Geometric');
		});
	});

	describe("check if input is an empty array", function(){
		it("should return zero", function(){
			assert.equal(aritGeo([]), 0);
		});
	});

	describe("check if input is a sequence", function(){
		it("should return -1", function(){
			assert.equal(aritGeo([1,9,3,4,5,17]), -1);
		});
	});

	describe("check if input type is a string", function(){
		it("should return -1", function(){
			assert.equal(aritGeo("a sequence"), -1);
		});
	});

	describe("check if input type is a number", function(){
		it("should return -1", function(){
			assert.equal(aritGeo(1), -1);
		});
	});

	describe("check if input array contains constants with common differences", function(){
		it("should return -1", function(){
			assert.equal(aritGeo([1,1,1,1,1,1,1]), -1);
		});
	});

	describe("check if input is null", function(){
		it("should return -1", function(){
			assert.equal(aritGeo(null), -1);
		});
	});

	describe("check if no argument was supplied", function(){
		it("should return -1", function(){
			assert.equal(aritGeo(), -1);
		});
	});

	describe("check if array contains single element", function(){
		it("should return -1", function(){
			assert.equal(aritGeo([1]), -1);
		});
	});

});

