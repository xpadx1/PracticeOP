/* 1 */function sum(arg){
    let result = 0;
    for (let i = 0; i < String(arg).length; i++){
        result += arg;
    }
    console.log(result)
}   
const a = sum(1)

/* 2 */function sum1(arg){
    let result = 0;
    for(const value of arg){
        result += value
    }
    console.log(result)
}
const b = sum1([1,2,3])

/* 3 */function sum2(arg){
    let result = 0;
    let i = 0;
    while(i < String(arg).length){
        result += arg
        i++
     }
    console.log(result)
}
const c = sum2(3)

/* 4 */function sum3(arg){
    let result = 0;
    let i = 0;
    do{
        result += arg[i];
        i++;
    }while(i < arg.length)

    console.log(result)
}
const d = sum3([1,-1,1])

/* 5 */function sum4(arg){
    const reducer = (x , y) => x + y;
    console.log(arg.reduce(reducer));
}
const e = sum4([10, -1, -1, -1])








