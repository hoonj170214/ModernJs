import React, { useState } from 'react';

const todoList = [
  { id: 1, task: 'Buy groceries', completed: false },
  { id: 2, task: 'Finish homework', completed: true },
  { id: 3, task: 'Go for a walk', completed: false },
];

function TodoApp() {
  const [showCompleted, setShowCompleted] = useState(false);

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  // 필터로 배열 목록을 반환하자
  let result = todoList.filter(item =>{
    console.log(item)
  });
  

  //2. map을 사용하여 
  // todoList 배열의 완료된 목록의 경우 리스트 태그, 스타일 빨간색으로, 비완료된 경우 초록색으로 <li> 태그를 반환해주세요.

let result3 = todoList.map((item) => { 
    `<li style="color: ${list.completed === 'true' ? red : white}"> ${item.task}</li> ` 
}
)

// todoList.map((obj) => `<li style="color:${obj.completed ? 'red' : 'green'}"> ${obj.task} </li>`)


// 3. products 배열을 가격(price)을 기준으로 오름차순으로 정렬하세요.
const products = [
  { name: 'Apple', price: 2.5, quantity: 5 },
    { name: 'Banana', price: 1.5, quantity: 8 },
    { name: 'Orange', price: 3, quantity: 3 },
    { name: 'Grapes', price: 4, quantity: 2 },
  ];

  
products['price'].sort();
// map 으로 해결해보기
products.sort((a, b) =>{
a.price - b.price});

// sort 함수 () 안에는 정렬 로직이 들어간 함수가 들어가야 한다. 
// 그런데 products 배열 안에 price에 어떻게 접근하는지 모르겠네

// 4. reduce 메소드를 사용하여 모든 제품의 총 가격을 계산하세요
let price = products.price;
products.reduce((acc,item)=> {
   acc + item.price * quantity;
},0)

//5. 나이가 20 이하인 학생들의 이름을 콤마(,)로 구분된 문자열로 생성하세요. (filter, join, map 활용)
// 5-1 . 20 살 이하인 사람들을 필터링

const students = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 19 },
];

students.filter((item)=>
  item.age <= 20
).map(item => item.name)
.join(',');
// filter.map.join 이렇게 연달아서 쓰는 방법 -> 메서드 체이닝 방식
// 메서드 체이닝 방식을 많이 쓴다.

//6.  student를 매개변수로 받아 name과 age를 구조분해 할당하여 name, age 변수를 출력하는 함수를 만들어서,
//forEach메소드의 매개변수로 넣어 실행해주세요.
// * 구조분해 할당과 forEach 및 콜백함수 사용

const printStd  = (student) =>{
  const {name, age} =  student;
  console.log(`이름 : ${name} , 나이 ${age}`);
}

students.forEach(printStd);
