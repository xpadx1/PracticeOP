const pipe = (...fns) => x => {
    for(const func of fns) {
        if(typeof func !== 'function') {
            let x = typeof func;
            throw new Error(`Type ${x} is not a function`);
        }
    }
    return fns.reduce((acc, fn) => fn(acc),x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
const f1 = pipe(inc, inc);
const f2 = pipe(inc, 7, cube);

const x = f(5);
const y = f1(7)
const z = f2(2)

console.log(x)
console.log(y)
console.log(z)
