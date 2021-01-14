function unique(arr){
    arr.sort();
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i + 1]){
            arr.splice(i + 1, 1);
        }else{
            continue;
        }
    }
    console.log(arr)
}

const result = unique([2, 1, 1, 3, 2, 6, 8, 6, 9, 8]);


