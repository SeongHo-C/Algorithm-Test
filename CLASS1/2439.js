// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

// 하지만, 오른쪽을 기준으로 정렬한 별을 출력하시오.

const input = require('fs').readFileSync('예제.txt').toString().trim();
const num = Number(input);

let result = '';
let space = '';

for (let i = num; i > 0; i--) {
  result += '*';
  space = '';
  for (let j = 1; j < i; j++) {
    space += ' ';
  }
  console.log(space + result);
}
