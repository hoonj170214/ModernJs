// forEach
// 순회
// 3가지를 매개변수로 받는다.
// 매개변수로 callback 함수를 받는다.
// item, index, array
// item : 현재 순회하는 배열요소
// index : 인덱스
// array : foreach 를 호출한 배열, 현재 순회중인 배열
arr = [1, 2, 3, 4, 5];

arr.forEach((item, idx) => {
  console.log(item, idx);
});
