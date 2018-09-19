function getIndexToIns(arr, num) {
    if (arr.length === 0) return 0;
    let resIndex = arr.sort((a,b)=>a-b).findIndex((elem) => elem>=num);
    if (resIndex < 0) {
        return arr.length;
    }
    return resIndex;
    
}

console.log(getIndexToIns([2, 5, 10], 15));
