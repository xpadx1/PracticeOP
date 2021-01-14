const object = {
    m1: "kek",
    m2: function (x, y) {
      return [x, y];
    },
    m3(x, y, z) {
      return [x, y, z];
    }
  }
  let len = Object.keys(object).length
  let newArray = [];
  for (let i = 0; i < len; i++) {
    newArray.push(Object.keys(object)[i], i+1);
    
  }
  console.log(newArray)
  

