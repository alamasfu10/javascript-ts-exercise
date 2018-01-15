module.exports = {
  indexesToObtainTarget: function(array, target) {
    for(let i=0; i<array.length; i++) {
      for (let j=i+1; j<array.length; j++) {
        if (array[i] + array[j] == target) {
          // Asumption: only one possible solution
          return [i, j];
        }
      }
    }
    return [];
  }
}
