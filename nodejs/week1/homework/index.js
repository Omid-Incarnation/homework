class Person {
	// your code here
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    
    addPhone(number){
        this.number = number;
    };
        
    call(){
       if(this.number !== undefined){
            console.log(`Calling ${this.name} at ${this.number}`);
       } else {
           console.log(`${this.name} has no phonenumber saved.`)
       }
    };
    
    birthday(){
        return console.log(`Wishing Jimmy a happy ${this.age}th birthday`);
    };
};

// remember to write a constructor function
let jimmy = new Person("Jimmy", 28);

jimmy.addPhone("55551234");

jimmy.call();
// should say "Calling Jimmy at 55551234..."

jimmy.birthday();
// should say "Wishing Jimmy a happy 29th birthday!"

let jill = new Person("Jill");

jill.call();
// should say "Jill has no phone number saved."