async function favorit() {
  let fav = 'javascript';
  return fav;
}

// await 키워드는 async 비동기함수에서만 사용 가능
async function displaySubject(subject) {
  // await 결과가 끝날때까지 기다려라

  return `hello, ${subject}`;
}
async function init() {
  const response = await favorit();
  const result = await displaySubject('everyone');
  console.log(result);
  console.log('i like' + response);
}

init();
