function titleCase(str) {
    return str.split(' ').map(elem=>elem.charAt(0).toUpperCase() + elem.toLowerCase().slice(1)).join(' ') ;
}

console.log(titleCase("I'm a little tea pot"));