// function factorialize(num) {
//     if (num < 1) return 1;
//     return num * factorialize(num-1);
// }
  
// console.log(factorialize(5));



function findLongestWordLength(str) {
    return Math.max(...str.split(' ').map(elem=>elem.length));
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");
