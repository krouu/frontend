const car = {
    color : "white",
    maxSpeed : 300,
    company : "kia",
    model : "쏘렌트",
};

const magjor = {
    name : "컴퓨터공학과",
    capacity : 500,
    head : "엄준식",
    department : "공학대학",
    course : {
        name : "컴퓨터공학개론",
    },
};

console.log(magjor.name);
console.log(magjor["name"]);
console.log(magjor.course.name);
console.log(magjor["course"]["name"]);