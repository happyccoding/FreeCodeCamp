function findElement(arr, func) {
    let result = arr.filter(elem=>func(elem)?true:false);
    return result.length ===0 ? undefined: result[0];
}

console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));