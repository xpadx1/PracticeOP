function difference(arr1, arr2){
    let value;
    let result = [];
    let j = 0;
    
    if (arr1.length<=arr2.length){
        value = arr1.length;
    }else if(arr1.length>=arr2.length){
        value = arr2.length;
    }
    for (let i = 0; i<value;i++){
        if (arr1[j]!=arr2[i]){
            result.push(arr2[i]);
            j++;
        }else{
            continue;
        }
    }
    console.log(result)
}




const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10, 6];
const result = difference(array1, array2);