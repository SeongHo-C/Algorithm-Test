// 최대점수 구하기

function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  let len = ps.length;

  function DFS(L, sum, time) {
    if (time > m) return;
    if (L === len) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  }

  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
