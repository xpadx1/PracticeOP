    function ip4v (array) {
    const split = array.split('.').map(Number)
    let res = [];
    for (let i = 0; i < split.length; i++) {
        let x = split[i];
        for(let j = 1; j < split.length-i; j++){
            x = x << 8;
        }
        res.push(x);
    }
    let result = res.reduce((total,amount) => total + amount);
    return result;
    
}

console.log (ip4v('127.0.0.1'))
console.log (ip4v('10.0.0.1'))
console.log(ip4v('192.168.1.10'))
console.log(ip4v('165.225.133.150'))