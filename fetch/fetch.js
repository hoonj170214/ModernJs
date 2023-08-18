fetch('student.json') //json 파일에 접근
  .then((Response) => Response.json()) // 결과값을 json 객체로 변환
  .then((json) => {
    let output = '';
    json.array.array.forEach((student) => {
      output += `<h2>${student.name}</h2> <ul><li>${student.major}</li>
      <li>${student.grade}</li></ul>`;
    });
    document.querySelector('#result').innerHTML = output;
  }).catch;
