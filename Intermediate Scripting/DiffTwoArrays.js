function diffArray(array1, array2){
    return array1
        .concat(array2)
        .filter(item => !array1.includes(item) || !array2.includes(item));
}
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));