const Person = function(firstAndLast){
    let fullName = firstAndLast;
  
    this.getFullName = function(){
        return fullName;
    };
    this.getFirstName = function(){
        return fullName.split(" ")[0];
    }
    this.getLastName = function(){
        return fullName.split(" ")[1];
    }
    this.setFullName = function(full){
        fullName = full;
    }
    this.setFirstName = function(first){
        fullName = first + " "+ fullName.split(" ")[1];
    }
    this.setLastName = function(last){
        fullName = fullName.split(" ")[0] + " " + last;
    }
    return firstAndLast;
};
  
const bob = new Person('Bob Ross');
bob.getFullName();