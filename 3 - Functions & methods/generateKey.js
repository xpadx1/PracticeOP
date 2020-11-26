function generateKey (length, characters) {
    let result = characters;
    let res = "";
    let i = 0;
    while(i <= length){
        const calculate = Math.floor(Math.random() * length);
        res += result[calculate];
        i++
    }
    return res;
}
console.log(generateKey(15, 'iloveusingvsyayayysndhfht'))