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

let copy = {...studentInfo};

copy.graduationYear = 2046;

console.log(copy.graduationYear);

let addedCourses = [" History", " Sociology", " Statistic"];
let allCourses = [...studentInfo.courses, ...addedCourses];

console.log(allCourses);