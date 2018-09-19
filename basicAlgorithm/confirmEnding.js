function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    let strReversed = str.split('').reverse().join('');
    let targetReversed = target.split('').reverse().join('');
    return strReversed.indexOf(targetReversed)===0 ? true: false;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));