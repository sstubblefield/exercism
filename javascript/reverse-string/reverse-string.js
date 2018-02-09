
var reverseString = function (str) {
  var splitString = str.split(''),
      reverseArray = splitString.reverse(),
      joinArray = reverseArray.join('');

  return joinArray;
}

module.exports = reverseString;
