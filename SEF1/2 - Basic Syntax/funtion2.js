function arr  (n1, n2)  {
    let result = ' ';
    for ( i=n2-n1; i <= n2; i++ ) {
        if (i%2>0){
            result += `${i},`;
        }
    }
    return result.slice(0,-1);
}
console.log(arr(15,30))