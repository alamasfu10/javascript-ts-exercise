var assert = require('assert');
var array = require('../array');

describe('Array', function() {
  describe('#sorted Array with reachable target', function() {
    it('should return [0, 1] when input is [2, 7, 11, 15] and target is 9  ->  input[0] + input[1]', function() {
      assert.deepEqual(array.indexesToObtainTarget([2, 7, 11, 15], 9), [0, 1]);
    });
    it('should return [0, 2] when input is [2, 7, 11, 15] and target is 13  ->  input[0] + input[2]', function() {
      assert.deepEqual(array.indexesToObtainTarget([2, 7, 11, 15], 13), [0, 2]);
    });
    it('should return [1, 3] when input is [2, 7, 11, 15] and target is 22  ->  input[1] + input[3]', function() {
      assert.deepEqual(array.indexesToObtainTarget([2, 7, 11, 15], 22), [1, 3]);
    });
    it('should return [2, 3] when input is [2, 7, 11, 15] and target is 26  ->  input[2] + input[3]', function() {
      assert.deepEqual(array.indexesToObtainTarget([2, 7, 11, 15], 26), [2, 3]);
    });
  });

  describe('#sorted Array with unreachable target', function() {
    it('should return [] when input is [2, 7, 11, 15] and target is 8  ->  Combination not possible', function() {
      assert.deepEqual(array.indexesToObtainTarget([2, 7, 11, 15], 8), []);
    });
    it('should return [] when input is [2, 7, 11, 15] and target is 2  ->  input[0]', function() {
      assert.deepEqual(array.indexesToObtainTarget([2, 7, 11, 15], 2), []);
    });
    it('should return [] when input is [2, 7, 11, 15] and target is 4  -> input[0] +  input[0]', function() {
      assert.deepEqual(array.indexesToObtainTarget([2, 7, 11, 15], 4), []);
    });
    it('should return [] when input is [2, 7, 11, 15] and target is 19  -> input[0] +  input[1] + input[2]', function() {
      assert.deepEqual(array.indexesToObtainTarget([2, 7, 11, 15], 19), []);
    });
    it('should return [] when input is [2, 7, 11, 15] and target is 30  -> input[3] +  input[3]', function() {
      assert.deepEqual(array.indexesToObtainTarget([2, 7, 11, 15], 19), []);
    });
  });

  describe('#unsorted Array with reachable target', function() {
    it('should return [1, 3] when input is [11, 7, 15, 2] and target is 9', function() {
      assert.deepEqual(array.indexesToObtainTarget([11, 7, 15, 2], 9), [1, 3]);
    });
    it('should return [0, 3] when input is [11, 7, 15, 2] and target is 13', function() {
      assert.deepEqual(array.indexesToObtainTarget([11, 7, 15, 2], 13), [0, 3]);
    });
    it('should return [1, 2] when input is [11, 7, 15, 2] and target is 22', function() {
      assert.deepEqual(array.indexesToObtainTarget([11, 7, 15, 2], 22), [1, 2]);
    });
    it('should return [0, 2] when input is [11, 7, 15, 2] and target is 26', function() {
      assert.deepEqual(array.indexesToObtainTarget([11, 7, 15, 2], 26), [0, 2]);
    });
  });

  describe('#unsorted Array with negative numbers and reachable target', function() {
    it('should return [1, 4] when input is [11, -7, 15, 21, -2, -10, 5] and target is -9', function() {
      assert.deepEqual(array.indexesToObtainTarget([11, -7, 15, 21, -2, -10, 6], -9), [1, 4]);
    });
    it('should return [3, 5] when input is [11, -7, 15, 21, -2, -10, 5] and target is 11', function() {
      assert.deepEqual(array.indexesToObtainTarget([11, -7, 15, 21, -2, -10, 6], 11), [3, 5]);
    });
    it('should return [1, 4] when input is [11, -7, 15, 21, -2, -10, 5] and target is 26', function() {
      assert.deepEqual(array.indexesToObtainTarget([11, -7, 15, 44, -2, -10, 6], 26), [0, 2]);
    });
  });

});
