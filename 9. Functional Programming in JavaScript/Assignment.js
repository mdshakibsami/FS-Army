/**
 * Implementing Lodash Library Function
 */

// _.chunk(array, [size=1]) ======> Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
function chunk(arr, num) {
  if (num <= arr.length) {
    const l = [];
    const r = [];
    for (let i = 0; i < num; i++) l.push(arr[i]);
    for (let i = num; i < arr.length; i++) r.push(arr[i]);
    return [l, r];
  } else {
    return [arr, []];
  }
}

// const result = chunk([1, 2, 3, 5, 6, 6, 5], 6);
// console.log(result);

// _.compact(array) =====> Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

function compact(arr) {
  const temArray = [];
  for (a of arr) {
    if (a) temArray.push(a);
  }
  return temArray;
}

// const result = compact([0, 1, false, 2, "", 3]);
// console.log(result);

// _.concat(array, [values]) ====> Creates a new array concatenating array with any additional arrays and/or values.

