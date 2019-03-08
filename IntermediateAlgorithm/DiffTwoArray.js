function diffArray(arr1, arr2) {
    let a = new Set(arr1);
    let b = new Set(arr2);
    let differenceA = new Set(
        [...a].filter(x => !b.has(x)));
    let differenceB = new Set(
        [...b].filter(x => !a.has(x)));
    return [...differenceA,...differenceB];
  }
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));