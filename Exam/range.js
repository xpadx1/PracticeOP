const range = (array, start, finish, step = 1) => {
    let result = [];
    for (let i = start; i < finish; i += step) {
        result.push(array[i]);
    }

    return result;
}

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(range(array,2, 6, 2))

