// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

const input = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i < input.length; i++) {
  const testCase = input[i].split(' ').map((x) => Number(x));
  console.log(testCase[0] + testCase[1]);
}
