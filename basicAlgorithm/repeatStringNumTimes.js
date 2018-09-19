function repeatStringNumTimes(str, num) {
    // repeat after me
    if (num <=0) return '';
    // return str.repeat(num);
    let strs = '';
    while(num>0) {
        strs += str;
        num--;
    }
    return strs;
}

console.log(repeatStringNumTimes("abc", 3));