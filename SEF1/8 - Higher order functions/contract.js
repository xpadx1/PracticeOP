const contract = (fn, ...types) => (...args) => {
    for(let i = 0; i < args.length; i++) {
        const arg = args[i];
        const type = types[i];
        const name = type.name.toLowerCase();
        console.log(type);
        if(typeof arg !== name) {
            throw new TypeError(`Argument type ${name} expected`);
        }
    }
    const res = fn(...args);
    const type = types[args.length - 1];
    const name = type.name.toLowerCase();
    if (typeof res !== name) {
        throw new TypeError(`Argument type ${name} expected`);
    }
    return res;
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res1 = concatStrings('Hello ', 'world!');
console.dir(res1);