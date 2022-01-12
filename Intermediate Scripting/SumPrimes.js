function sumPrimes(num){
    let result = 0;
    let flag = 1;
    for(let i = 2; i <= num; i++){
        flag = 1;
        for(let j = 2; j < i; j++){
            if(i % j == 0){
                flag = flag + 1;
            }
        }
        if(flag == 1){
            result += i;
        }
    }
    return result;
}
  
console.log(sumPrimes(10));