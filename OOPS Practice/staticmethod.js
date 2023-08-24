//This will throw error like this (TypeError: newGirl.mention is not a function).
// Because static methods cannot be used by class instances 

// Static method on function 

let Girl = function (name, age) {
    this.name = name;
    this.age = age
}

Girl.mention = function () {
    console.log(this.name + " is " + this.age + " years old")
}

let newGirl = new Girl("Sindhu", 27)
newGirl.mention()


//Static method on class

class Boy {
    constructor(name, id) {
        this.name = name;
        this.id = id
    }

    static mention() {
        console.log("He is " + this.name + " with number" + this.id)
    }
}

let Gokul = new Boy("Gokul", 1)
Gokul.mention()