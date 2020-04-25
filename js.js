let ar1 = [1, 2, 3, 4, 5, 6, 7, 8];
let ar2 = [1, 2, 3, 4, 9, 6, 7];
let ar3 = [1, 2, 3, 4];

function getDiff(...arrs) {
  let result = [];

  for (let i = 0; i < arrs.length; i++) {
    result.push(getFirstDiff(arrs.shift(), arrs));
  }

  return [].concat(...result);
}
console.log(getDiff(ar1, ar2, ar3));

function getFirstDiff(arr, arays) {
  let result = [];

  for (let elem of arr) {
    if (inArrays(elem, arays)) {
      result.push(elem);
    }
  }

  return result;
}

function inArrays(elem, arrs) {
  for (let arr of arrs) {
    if (inArray(elem, arr)) {
      return false;
    }
  }
  return true;
}

function inArray(elem, arr) {
  return arr.indexOf(elem) !== -1;
}


