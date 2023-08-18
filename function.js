// 함수

function add(x, y) {
  const total = x + y;
  return total;
}

// 함수에 매개변수를 적게 넣을 경우
add(); // NaN을 반환한다.

// 많이 넣을 경우
add(1, 2, 5, 4, 55); // 뒤의 매개변수를 무시한다.
