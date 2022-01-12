function fearNotLetter(str){
    for(let i = 0; i < str.length; i++){
        let code = str.charCodeAt(i);
        if(str.charCodeAt(i) === str.charCodeAt(i+1)-2){
            return String.fromCharCode(code+1);
        }
    }
    return undefined;
}
  
console.log(fearNotLetter("abce"));