// 문자열 압축

function solution(s) {
  let answer = '';
  let cnt = 1;

  //   for (let x of s) {
  //     if (answer.includes(x)) {
  //       cnt++;
  //     } else {
  //       if (cnt !== 1) answer += cnt;
  //       answer += x;
  //       cnt = 1;
  //     }
  //   }
  s = s + ' ';
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }

  return answer;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));
