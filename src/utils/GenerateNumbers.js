export default (maxItems, length) => {
    let arr = [];
    // that loops until will be full
    while (arr.length < length) {
        var r = Math.floor(Math.random() * maxItems) + 1;
        // And just push on the array if ins't on array
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}
