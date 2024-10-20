// 버스 요금 계산기 프로그램
// 유저에게 1. 마을버스 2. 시내버스 3. 광역버스 4. 고속버스를 선택한 후
// 유저에게 나이를 물어보기(어린이: 50% / 8~19:30% / 65세 이상 :20%)

// 모두 선택 후 콘솔로그로 ~~버스의 최종 금액은 ~~입니다

const bus = Number(prompt("버스를 선택해주세요(1. 마을버스 2. 시내버스 3. 광역버스 4. 고속버스)"));
const age = Number(prompt("나이를 입력해주세요"));

const busNameData = {
    1 : "마을버스",
    2 : "시내버스",
    3 : "광역버스",
    4 : "고속버스"
};

const busPriceData = {
    1 : 1000,
    2 : 1500,
    3 : 2000,
    4 : 5000
};

const busData = {
    1 : {
        name : "마을버스",
        price : 1000
    },
    2 : {
        name : "시내버스",
        price : 1500
    },
    3 : {
        name : "광역버스",
        price : 2000
    },
    4 : {
        name : "고속버스",
        price : 5000
    }
}

console.log(`${busNameData.bus}의 최종 금액은 ${busPriceData.bus}`);
console.log(`${busData.bus.name}의 최종 금액은 ${busData.bus.price}`)