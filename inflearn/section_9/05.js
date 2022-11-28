// 송아지 찾기

function solution(s, e) {
  let answer = 0;
  const queue = [];
  const ch = Array.from({ length: 10001 }, () => 0);
  queue.push(s);

  while (queue.length) {
    let x = queue.shift();

    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return ch[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        queue.push(nx);
        ch[nx] = ch[x] + 1;
      }
    }
  }

  return answer;
}

console.log(solution(8, 3));

function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;

  let L = 0;
  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let x = queue.shift();

      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++;
  }
  return answer;
}

console.log(solution(5, 14));
