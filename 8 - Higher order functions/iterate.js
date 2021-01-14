const iterate = (object, callback) => {
  const newObj = new Object() 
  for (keys in object){
      newObj.key = keys;
      newObj.value = object[keys]
      console.log(newObj)
    }
    
};

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
    console.log({ key, value });
  });
