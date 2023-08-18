// 함수

function add(x, y) {
  const total = x + y;
  return total;
}

// 함수에 매개변수를 적게 넣을 경우
add(); // NaN을 반환한다.

// 많이 넣을 경우
add(1, 2, 5, 4, 55); // 뒤의 매개변수를 무시한다.

// 함수는 arguments (인자들)이라는 변수를 갖는다.
// 배열과 비슷한 속성을 가지고
// 호출당시에 받은 매개변수들을 저장하고 있다.
function add() {
  let sum = 0;
  for (const item of arguments) {
    sum += item;
  }
  return sum;
}
add(1, 2, 3, 4, 5, 6); // 유연한 매개변수 적용가능
function avg() {
  let sum = 0;
  for (const item of arguments) {
    sum += item;
  }
  return sum / arguments.length;
}

// 나머지 매개변수 문법(spread)
// 목록의 마지막에만 위치할 수 있다.
function avg(...args) {
  let sum = 0;
  for (const item of arguments) {
    sum += item;
  }
  return sum / arguments.length;
}

// 익명함수
// 함수에 이름을 주지 않는다.
// 선언부에서 이름을 제외
var avg = function (...args) {
  let sum = 0;
  for (const item of arguments) {
    sum += item;
  }
  return sum / arguments.length;
};

// 익명함수의 선언부를 제외하고 , 화살표 함수로 사용
var avg = (...args) => {
  let sum = 0;
  for (const item of arguments) {
    sum += item;
  }
  return sum / arguments.length;
};

// 한줄이면 생략 가능
const add = (x, y) => x + y;
