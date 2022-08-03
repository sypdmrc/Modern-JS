//Alt sınıflar

//ES5
function PersonES5(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName; 

}

PersonES5.prototype.sayHi=function(){
    return `Hello I'm ${this.firstName} ${this.lastName}.`
}

function CustomerES5(firstName,lastName,phone,username){
    PersonES5.call(this,firstName,lastName);
    this.phone = phone;
    this.username = username;
}


CustomerES5.prototype=Object.create(PersonES5.prototype);
var customer=new CustomerES5("sena","turan","123456","senaturan");

console.log(customer.sayHi());
console.log(customer);

//ES6

class PersonES6{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi(){
        return `Hello I'm ${this.firstName} ${this.lastName}.`
    }
}

class CustomerES6 extends PersonES6{
    constructor(firstName,lastName,phone,username){
       super(firstName,lastName);
       this.phone = phone;
       this.username = username;
    }

    static getTotal(){
        return 1000;
    }
}

let customer1=new CustomerES6("volkan","yükselen","121331","volkyuksel");

console.log(customer1.sayHi());
console.log(customer1);
console.log(CustomerES6.getTotal());