// 참조타입 : Object, Array

const soccer = ["손흥민", "김민재", "황희찬", "이강인"];

console.log(soccer[0]); // 0부터 시작
console.log(soccer[3]); // 이강인

const lotto = [3,8,12,25,30,39];

const socre = [[1,2,3],[10,11,12],[50,51,52]];
console.log(socre[2][0]); // 50
console.log(socre[1][2]);

const menu =[
    {name : "아메리카노", price : 1500},
    {name : "라떼", price : 2500}
];

console.log(menu[1]["name"]);
console.log(menu[1]["price"]);