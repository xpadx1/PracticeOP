function removeElement(arr, num, num1, num2){
    let result = [];
    for (let i = 1; i <= arr.length; i++){
       if (arr[i] != arr[num] || arr[i] != arr[num1] ){
         result.push(arr[i-1]);
       }else{
           continue;
       }
    }
    console.log(result);
}
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
