const store = (n) => {
    return function(){
        return n
    }
}
const read = store(5);
const value = read();
console.log(value);