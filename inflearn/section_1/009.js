// A를 #으로

function solution(s) {
  let answer = '';

  //   answer = s
  //     .split('')
  //     .map((x) => {
  //       if (x === 'A') {
  //         return '#';
  //       }
  //       return x;
  //     })
  //     .join('');
  //   for (let x of s) {
  //     if (x === 'A') {
  //       answer += '#';
  //     } else {
  //       answer += x;
  //     }
  //   }
  answer = s;
  answer = answer.replace(/A/g, '#');

  return answer;
}

let str = 'BANANA';
console.log(solution(str));
