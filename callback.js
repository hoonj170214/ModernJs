function loadScript(src) {
  let script = document.createElement('script');

  // script src = ""
  script.src = src;
  document.head.append(script);
}
// 등장 순서
// 스크립트를 불러오는 동안 비동기적(async)으로 실행된다.

// 1번
loadScript('./my/script.js');

// 2번
// 순차적으로 실행되지 않고,
// 비동기적인 함수 로딩을 기다리지 않고, 먼저 수행
console.log('콜백함수');
