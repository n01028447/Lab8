let studentInfo = {
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

let { name, courses } = studentInfo; 
console.log(name);
console.log(courses);


let scores = [85, 92, 78, 90];
console.log(scores[0]);
console.log(scores[1]);