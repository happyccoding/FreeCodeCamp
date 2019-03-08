function sumAll(arr) {
    //return 1;
    let total = 0;
    arr.sort((a, b) => a - b);
    temp = arr[0];
    while(temp<=arr[1]) {
        total += temp++;
    } 
    return total;
}

console.log(sumAll([8, 4]));
//console.log(sumAll([8, 4]));