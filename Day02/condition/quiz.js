// 유저에게 프로그래밍 점수를 입력 받고
// 90점 이상이면 A,
// 80점 이상이면 B,
// 70점 이상이면 C,
// 60점 이상이면 D,
// 그 외 F

// const score = Number(prompt("프로그래밍 점수를 입력해주세요"));

// if(score >= 90){
//     console.log("A");
// } else if(score >= 80){
//     console.log("B");
// } else if(score >= 70){
//     console.log("C");
// } else if(score >= 60){
//     console.log("D");
// } else {
//     console.log("F");
// }


// 유저에게 각도(angle)을 물어본 후
// 평각, 직각, 둔각, 예각
// const angle = Number(prompt("각도"));

// if(angle == 180 || angle == 0){
//     console.log("평각");
// } else if(angle == 90){
//     console.log("직각");
// } else if(180 > angle > 90){
//     console.log("둔각");
// } else if(90 > angle > 0){
//     console.log("예각");
// }

// 버스 요금 계산기 프로그램
// 유저에게 1. 마을버스 2. 시내버스 3. 광역버스 4. 고속버스를 선택한 후
// 유저에게 나이를 물어보기(어린이: 50% / 8~19:30% / 65세 이상 :20%)

// 모두 선택 후 콘솔로그로 ~~버스의 최종 금액은 ~~입니다

const bus = Number(prompt("버스를 선택해주세요(1. 마을버스 2. 시내버스 3. 광역버스 4. 고속버스)"));
const age = Number(prompt("나이를 입력해주세요"));
let bus_price = 0;
let bus_name = "";

if(bus == 1){
    bus_price = 1200;
    bus_name = "마을버스";
} else if(bus == 2){
    bus_price = 1500;
    bus_name = "시내버스";
} else if(bus == 3){
    bus_price = 2000;
    bus_name = "광역버스";
} else if(bus == 4){
    bus_price == 5000;
    bus_name = "고속버스";
}

const child = 0 < age && age < 8 && 0.5;
const teenager = 8 <= age && age <= 19 && 0.7;
const adult = 65 <= age && 0.8;

const price_sale = child || teenager || adult || true;

console.log(`${bus_name}의 최종 금액은 ${bus_price * price_sale} 입니다`);