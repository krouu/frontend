// 1. 도너츠 구매 갯수를 입력받고, 도너츠 가격 입력
//    10개 이상이면 10%, 20개 이상이면 20% 
//    console로 나타내기
const donut_cnt = Number(prompt("도너츠 구매 갯수"));
const donut_price = Number(prompt("도너츠 가격 입력"));
const total_price = donut_cnt * donut_price;

const orgin_price = donut_cnt < 10;
const sale10 = 20 > donut_cnt >= 10;
const sale20 = donut_cnt >= 20;

orgin_price && alert(total_price);
sale10 && alert(total_price * 0.9);
sale20 && alert(total_price * 0.8);


// 2. 정수를 입력해서 홀수인지 짝수인지 알려주기
//    정수를 입력하면 콘솔로그 ~~은 홀수/짝수 입니다
const num = Number(prompt("정수 입력"));

console.log(`${!!(num % 2) ? "홀수" : "짝수"} 입니다`);
