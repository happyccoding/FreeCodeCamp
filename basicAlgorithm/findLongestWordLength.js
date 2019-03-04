function findLongestWordLength(str) {
    let arr = str.split(' ').map(elem=>elem.length);
    return Math.max(...arr);
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


