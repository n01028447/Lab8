let studentInfo5 = {
    name: "John Cena",
    age: 122,
    enrollment: true,
    courses: [" Biology", " Chemistry", " English", " Calculus", " Psychology"],
    display: function () {
        console.log("Hello my name is " + this.name);
        console.log("I am " + this.age + " years old");
        console.log("I'm currently taking:" + this.courses);
    },
    add: function (newCourse) {
        this.courses.push(newCourse);
    }
};

studentInfo5.add(" Necromancy");
studentInfo5.display();
