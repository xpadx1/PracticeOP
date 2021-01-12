const chunk = (array, num) =>{ 
    let subarray = []; 
    for (let i = 0; i < Math.ceil(array.length/num); i++){
      subarray[i] = array.slice((i*num), (i*num) + num);
    }
    return subarray;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(chunk(array, 2));