function destroyer(arr, ...values){
    return arr.filter(element => !values.includes(element));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));