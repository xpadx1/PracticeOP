let array = {
    name: 'Marcus',
    phone: 380671234567
}
let array1 = {
    name: 'John',
    phone:380679876543
}
function findPhoneByName(name) {
    if (name === array.name  ){
        console.log(array.phone)
    }
    if (name === array1.name){
        console.log(array1.phone)
    }
    
    return 0;
}
findPhoneByName('John')