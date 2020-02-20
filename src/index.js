
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {
      return 0;
  }
  var SORT_ARR = array.sort(function(a, b) {
      return a - b;
  });
  return SORT_ARR[0];
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {
      return 0;
  }
  var SORT_ARR = array.sort(function(a, b) {
    return a - b;
  });
  return SORT_ARR[SORT_ARR.length - 1];
}

exports.avg = function avg (array) {
  if (array === undefined || array.length === 0) {
      return 0;
  }
  var SUM_ARR = 0;
  array.forEach(function(item) {
      SUM_ARR += item;
  });
  return SUM_ARR / array.length;
}
