function frankenSplice(arr1, arr2, n) {

    // It's alive. It's alive!
    let tmparr2 = arr2.slice(0);
    tmparr2.splice(n, 0, ...arr1);
    return tmparr2;
}

let res = frankenSplice([1, 2, 3], [4, 5], 1);
console.log(res);
