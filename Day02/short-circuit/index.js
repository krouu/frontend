const user = !!prompt("유저의 이름을 입력") || "Guest";
alert(`닉네임 ${user}님 환영합니다`);

const pw = prompt("비밀번호 입력");
const result = pw == "1234";
result && alert("로그인 축하염");