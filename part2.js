let studentInfo2 = {
    name: "John Cena",
    age: 122,
    enrollment: true,
    courses: [" Biology", " Chemistry", " English", " Calculus", " Psychology"],
    display: function () {
        console.log("Hello my name is " + this.name);
        console.log("I am " + this.age + " years old");
        console.log("I'm currently taking:" + this.courses);
    }
};

let infoString = JSON.stringify(studentInfo2);
console.log(infoString);

let infoObj = JSON.parse(infoString);
console.log(infoObj); //The function is omited for the newly created object

console.log(studentInfo2);
