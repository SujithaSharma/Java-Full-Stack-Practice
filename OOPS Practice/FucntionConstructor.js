let Employee = function (name, salary, id) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.calculateSalary = function () {
        let totalsalary = 12 * this.salary;
        console.log(totalsalary)
    }
}

let Suji = new Employee('Sujitha', 30000, 1)
console.log(Suji)
Suji.calculateSalary()

let Gokul = new Employee('Gokul', 32000, 2)
console.log(Gokul)
Gokul.calculateSalary()

//If we use this method the calculateSalary func will be attached to all the object instances. 
// Hence we can use prototype property to attach it seperately but it will be still sccessible to instances

let Employee1 = function (name, salary, id) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}

Employee1.prototype.calculateSalary = function () {
    let totalsalary = 5 * this.salary;
    console.log(totalsalary)
}

let Suji1 = new Employee1('Sujitha', 30000, 1)
console.log(Suji1)
Suji1.calculateSalary()

let Gokul1 = new Employee1('Gokul', 32000, 2)
console.log(Gokul1)
Gokul1.calculateSalary()

//Class Example
// Class expression and Class declaration are two types of creating the class

class Person {
    constructor(name, id, place) {
        this.name = name;
        this.id = id;
        this.place = place

        this.showDetails = function () {
            return this.name, this.id, this.place  //As this func is inside constructor this is called everytime
        }
    }

    greet() {
        return "Hello " + this.name //As this func is outside constructor this is called only when accessed
    }
}

Person.prototype.call = function () {
    return this.name + " please come here"  // Similar to function inside class
}

let suji = new Person("Suji", 1, "Erode")
console.log(suji)
console.log(suji.greet())
console.log(suji.call())

//Accessor methods get and set

class User {
    constructor(uname, pword, role) {
        this.uname = uname;
        this.pword = pword;
        this.role = role
    }

    set setPword(val) {
        if (val.length < 4) {
            console.error('Password should be 4 characters long')
        }
        else {
            this.pword = val
        }
    }
}

let user1 = new User("Suji", "gokulsuji", "admin")
user1.setPword = 'asksds'
console.log(user1)
