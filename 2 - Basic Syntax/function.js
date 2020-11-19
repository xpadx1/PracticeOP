const fun = (n1, n2) => {
    let result = ' ';
    for ( i=n2-n1; i <= n2; i++ ) {
        result += `${i},`;
    }
    
    return result.slice(0,-1);
}
console.log(fun(15,30))