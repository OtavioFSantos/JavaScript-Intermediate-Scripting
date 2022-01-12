function sumAll(array){
    let sum = 0;
    for(let i = Math.min(...array); i <= Math.max(...array); i++){
        sum += i;
    }
    return sum;
}
  
console.log(sumAll([10, 5]));