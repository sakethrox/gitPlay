var person = {
    firstname : "Default",
    lastname : "Default", 
    getFullName : function() {
        return this.firstname + ' ' + this.lastname;
    }
}


var john = {
   
    lastname : 'Doe'
}

john.__proto__ = person;

console.log(john.getFullName.apply(person))
console.log(john.firstname)

var a = {}