function uniteUnique(){
    let args = [].concat(...arguments);
    let newArr = [];
    for(let i = 0; i < args.length; i++){
        if(!newArr.includes(args[i])){
            newArr.push(args[i]);
        }
    }
    return newArr.sort();
}
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));