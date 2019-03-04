function chunkArrayInGroups(arr, size) {
    // Break it up.
    let newArray = [];
    while(arr.length) {
        newArray.push(arr.splice(0,size));
    }
    return newArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));