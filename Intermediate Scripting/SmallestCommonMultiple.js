function smallestCommons(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const numberDivisors = max - min + 1;
    let upperBound = 1;
  
    for(let i = min; i <= max; i++){
        upperBound *= i;
    }
  
    for(let mult = max; mult <= upperBound; mult += max){
        let divisorCount = 0;
        for(let i = min; i <= max; i++){
            if(mult % i === 0){
                divisorCount += 1;
            }
        }
        if(divisorCount === numberDivisors){
            return mult;
        }
    }
}
  
console.log(smallestCommons([1,5]));