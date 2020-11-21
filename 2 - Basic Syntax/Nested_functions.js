let av = 0;
let sq = 0;
let cu = 0;
mass =[]
function average(a,b) {
    av += (a+b)/2;
    console.log(`Average = ${ av}`);
    mass+=`${av},`
    av=0
}
function square(a) {
    sq += a**2;
    console.log(`Square = ${sq}`);
}
function cube(a) {
    cu += a**3;
    console.log(`Cube = ${cu}`);
}

for(let i=0; i<=9; i++){
    square(i);
    cube(i);
    average(sq,cu)
    console.log("")
    sq=0
    cu=0
 }
console.log(mass.slice(0,-1))
