function loadScript(src, callback) {
  let script = document.createElement('script');

  // script src = ""
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}
// 등장 순서
// 스크립트를 불러오는 동안 비동기적(async)으로 실행된다.

// 1번
loadScript('./my/script.js');

newFunction();

// 2번
// 순차적으로 실행되지 않고,
// 비동기적인 함수 로딩을 기다리지 않고, 먼저 수행
console.log('비동기적으로 수행');

loadScript('./my/script.js', function () {
  console.log('기다렸다가 수행하고 싶어요.');
});

// 두번째 매개변수로 콜백함수를 주어
// 먼저 수행한 것을 끝내고 동기적으로 수행
function loadScript(src, callback) {
  let script = document.createElement('script');

  // script src = ""
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

// 콜백함수 기반 프로그래밍
loadScript('./my/script.js', function () {
  console.log('2번 수행문입니다.');
  loadScript('./my/script_2.js', function () {
    console.log('4번 수행문입니다.');
  });
  loadScript('./my/script_3.js', function () {
    console.log('6번 수행문입니다.');
  });
});

function loadScript(src, callback) {
  let script = document.createElement('script');

  // script src = ""
  script.src = src;
  // 성공적으로 로드 되었을때
  script.onload = () => callback(null, script);
  // 성공적으로 로드 되지 않았을때
  script.onerror = () => callback(new Error('에러가 발생했습니다.'));

  if (error) {
    // 에러처리
  } else {
    // 스크립트 로딩이 성공적으로 끝남
  }

  document.head.append(script);
}
// 콜백 속의 콜백
// 콜백 지옥
/*
loadScript('1.js', function(error, script){
  if(error){
    // 에러처리
  } else{
    loadScript('2.js', function (error, script){if(error)
      // 에러처리
    } else{
      // 에러가 나지 않은 경우
    }
  }
}
*/
