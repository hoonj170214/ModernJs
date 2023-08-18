const pizza = () => {
  return new Promise((resolve, reject) => {
    resolve('피자를 주문합니다.');
  });
};

/*  아래랑 같은 함수임.
function step1(message) {
  console.log(message);
}
*/

const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('피자 도우 준비하기');
    }, 3000);
  });
};

const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('피자 토핑 완료되었습니다.');
    }, 1000);
  });
};

const step3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('피자 굽기가 완료되었습니다.');
    }, 2000);
  });
};

// setTimeout  : 비동기

pizza()
  .then((result) => step1(result))
  .then((result) => step2(result))
  .then((result) => step3(result))
  .then(() => {
    console.log('피자가 준비되었습니다.');
  });
