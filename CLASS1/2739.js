// N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.
const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().trim();
const num = Number(input);

let result = 0;
for (let i = 1; i < 10; i++) {
  result = num * i;
  console.log(`${num} * ${i} = ${result}`);
}
