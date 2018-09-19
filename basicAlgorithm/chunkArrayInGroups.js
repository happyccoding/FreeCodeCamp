function chunkArrayInGroups(arr, size) {
    var newArr = [];
    while (arr.length) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));