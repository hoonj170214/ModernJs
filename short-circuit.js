/**
 * short - circuit (단축 평가)
 * : null 여부를 검사하기 위해서
 */

var name = o && o.getName();

// AND 연산( && )
// 왼쪽 부분이 falsy 한 값이면
// 오른쪽 부분을 실행하지 않는다.

// 왼쪽 부분이 truthy 한 값이면,
// 오른쪽 부분을 실행한다.

// 아래 부분은 길게 쓴 것
if (o) {
  var name = o;
  o.getName();
} else {
  var name = o;
}
////////////////////////////////////////////

// OR 연산( || )
// 왼쪽 연산이 falsy이면, 오른쪽 연산을 수행
// 왼쪽 연산이 truthy면, 오른쪽 연산 무시하고 왼쪽 연산 cachedName을 대입
var name = cachedName || (cashedName = getName());

// 삼항 연산자
// age > 18 초과면 yes를 allowed에 대입
// age > 18 미만이면 no를 allowed에 대입
var allowed = age > 18 ? 'yes' : 'no';
