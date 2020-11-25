/*V.1*/
function random(min, max) {
    let maximum = Math.floor(Math.random() * max);
    let minimum = Math.floor(Math.random() * min);
    let result = (maximum-minimum);
    if (result < min){
        random (min,max);
    }
        else{
            console.log(result);
        }
    
}
random(4,16);


/*V.2*/
function Random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(Random(4,16));