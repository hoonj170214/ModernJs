// 1. 명언을 가져와서 console.log로 출력해주세요.
fetch('https://dummyjson.com/quotes')
  .then((response) => response.json())
  .then((obj) => {
    console.log(obj);
  })
  .catch((error) => console.log(error));

// 2. 가져온 명언을 랜덤하게 선택하여 HTML 영역에 표시해주세요.
fetch('https://dummyjson.com/quotes')
  .then((response) => {
    response.json();
  })
  .then((json) => {
    // 명언을 추출해내기
    // HTML에 명언과 제자를 넣기
    const random = Math.floor(Math.random() * 30);
    const quote = json.quotes[random].quote;
    const author = json.quotes[random].author;
    document.querySelector('.quote').innerHTML = quote;
    document.querySelector('.author').innerHTML = author;
  });
