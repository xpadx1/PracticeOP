let array = ["apple", "carrot", false, 123, true, "I am", 267]
  
  let str = 0;
  let bool = 0;
  let num = 0;

const len = array.length;
for (let i=0; i < len; i++) {
  
  if (typeof array[i] === "string"){ 
    str++;
  }
   else if (typeof array[i] === "number"){ 
     num++;
   }
    else if (typeof array[i] === "boolean") {
      bool++
    }
}
console.log(` String: ${str}\n Boolean: ${bool}\n Number: ${num} `)