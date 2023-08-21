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

let arrPerson = [
  { name: '홍길동' },
  { name: '이몽룡' },
  { name: '성춘향' },
  { name: '변사또' },
];

//이름이 변사또인 사람의 인덱스를 찾아주세요
let result = arrPerson.findIndex((item) => {
  item.name === '변사또';
});
console.log(result);

let arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.reduce((acc, item) => acc + item);
