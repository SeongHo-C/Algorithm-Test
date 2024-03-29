// 크레인 인형뽑기(카카오)

function solution(board, moves) {
  let answer = 0;
  let stack = [];

  moves.forEach((pos) => {
    let index = stack.length - 1;

    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;

        if (tmp === stack[index]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(tmp);
        }
        break;
      }
    }
  });

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
