/**
 * Returns a new array without duplicate elements
 * 
 * @param {Array} arr
 * @return {Array}
 */

module.exports = function (arr) {
  var len = arr.length
  if (!len) return []

  var result = [arr[0]]
    , rc = 1
    , i = 1

  each: while (i < len) {
    var el = arr[i++]
      , c = 0

    while (c < rc) {
      if (result[c++] === el) continue each
    }

    result[rc++] = el
  }

  return result
}
