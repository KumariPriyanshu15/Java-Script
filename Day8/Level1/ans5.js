let dog = {
    name: "tommy",
    legs: 4,
    color: "brown",
    age: 2,
    bark: "loud",
    breed: "German Shepherd",

    
    getDogInfo: function() {
        return `${this.name} is a ${this.age} year old ${this.color} ${this.breed} with ${this.legs} legs. When the dog is angry , barks ${this.bark}.`
    }
}

console.log(dog.breed)
console.log(dog.getDogInfo())
