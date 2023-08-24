//Inheritance in class

class Male {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Gokul extends Male {
    constructor(name, age, hobby) {
        super(name, age)
        this.hobby = hobby
    }

    printHim() {
        return this.name + " is " + this.age + " years old. He likes " + this.hobby
    }
}

let boy = new Gokul("Gokul", 27, "Driving")
console.log(boy.printHim())

//Inheritance in Object.create()

let person = {
    callPerson(name, age, hobby) {
        this.name = name
        this.age = age
        this.hobby = hobby
        return name + " is " + age + " years old. He likes " + hobby
    }
}

let employee = Object.create(person)
employee.callEmp = function (name, age, hobby, id) {
    employee.callPerson.call(this, name, age, hobby)
    this.id = id
}

let suji = Object.create(employee)
suji.callEmp("Suji", 23, "Singing", 1)
console.log(suji)