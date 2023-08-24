//Object.create() method is used to give our preferred parameter to the object rather than predefined ones

let Student = {
    callHim() {
        return "Hi " + this.name
    }
}

let suji = Object.create(Student)
suji.name = "Sujitha" //preferred parameter given
console.log(suji.callHim())

//call(),bind() and apply() methods

//Call() method on object

let human = {
    firstName: "Suji",
    lastName: "K",
    fullName() {
        return this.firstName + " " + this.lastName
    }
}

function hobby() {
    return this.firstName + " " + this.lastName + " likes " + this.hobby
}

console.log(hobby.call(human))

//Call() method on functions

function Employee(name, age, gender, id) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.id = id;
};

function Developer(name, age, gender, id,
    specialization) {

    // Calling Employee constructor function
    Employee.call(this, name, age, gender, id);

    // Adding a new parameter
    this.specialization = specialization;
}

let mark = new Employee("Mark", "22", "Male", 2)
console.log(mark)

let merry = new Developer("Merry", "22", "Female", 1, "IT")
console.log(merry)

//Bind() method on functions

let Employee1 = {
    specialization: function () {
        return this.specialization
    }
}

let Developer1 = {
    // Adding a new parameter
    specialization: "Data"
}

function Developer2(salary) {
    console.log(this.specialization, salary)
}

let julie = Employee1.specialization.bind(Developer1)
console.log(julie())

let antony = Developer2.bind(Developer1, 30000)
antony()

//Apply() method on functions

let Employer2 = {
    name: "Sujitha",
    age: 23
}

function Details(gender) {
    return this.name + " " + this.age + " " + gender
}

let Suji = Details.apply(Employer2, ['Female']) //Args should be passed as Array
console.log(Suji)

let Sujicall = Details.call(Employer2, 'Female')
console.log(Sujicall)

let Sujibind = Details.bind(Employer2, 'Female')
console.log(Sujibind())

function Employer3(name, age) {
    this.name = name
    this.age = age
}

function Details1(name, age, gender) {
    Employer3.call(this, name, age)
    this.gender = gender
}

let Gokul = new Details1("Gokul", 27, 'Male')
console.log(Gokul)

