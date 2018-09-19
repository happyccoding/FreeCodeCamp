function mutation(arr) {
    let first = arr[0].toLowerCase().split('');
    let second = arr[1].toLowerCase().split('');

    return second.every(elem=>first.indexOf(elem)>=0);
    // return arr;
}

console.log(mutation(["hello", "hel"]));