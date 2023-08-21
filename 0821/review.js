// 삼항 조건 연산자
// 조건식 ? 참 : 거짓

const d = '안녕하세요';

typeof d === 'string'
  ? console.log('문자 자료형')
  : console.log('문자 자료형이 아님');

// 숫자가 주어지고 , 짝수와 홀수를 구분하는 삼항 연산자를 만들어주세요
let number = 1;
let result = function 홀짝(number) {
  number % 2 === 1 ? console.log('홀수 입니다.') : console.log('짝수 입니다.');
};

result(number);

// const 로 객체를 설정해도, 프로퍼티는 변경 조작 가능하다.
// const person ={};    는 불가능
