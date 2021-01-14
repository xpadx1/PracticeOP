function max(arr){
    const max = (a, b) => (a > b ? a : b)
    let result  = arr
        .map(row => row.reduce(max))
        .reduce((acc, rowMax) => acc > rowMax ? acc:rowMax)
    console.log(result)
}

const m = max([
    [15, 2, 3],
    [4, 13, 6],
    [7, 8, 9]]);
