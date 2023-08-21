let promise = new Promise(function (resolve, reject) {
  // resolve : 성공적으로 수행되었을 때
  // reject : 에러가 발생했을 때
  // 상태(state) : "pending", "fulfilled", "rejected"(대기 / 성공 / 실패)
  // 결과(result) : undefined,   value,      error
  // resolve(value) 가 되었을 때 value 값을 함께 호출
  // reject(error) 가 되었을 때 error 값과 함께 호출
  setTimeout(() => resolve('완료'), 1000);
  setTimeout(() => reject(new Error('어떤 에러가 발생했어요')), 1000);
});
