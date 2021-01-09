function difference(arr1, arr2){
    let i = 0
    let result = arr1
    for (i = 0; i < arr2.length;i++){
        result.push(arr2[i])
    }
    result.sort();
    
    for (let j = 0; j <= result.length; j++ ){
        
        if (result[j] === result[j+1]){
            result.splice(j+1,1);
            
        }
        else{
            continue;
        }
    }
    console.log(result)
}


const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10, 6];
const result = difference(array1, array2);