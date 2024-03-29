function checkEmail(email) {
  let check = true;
  const elen = email.length;
  const reg_email = /^([0-9a-zA-Z_\.-]+)@email.com/;

  if (!reg_email.test(email) || elen < 11 || elen >= 20) return false;

  return check;
}

function checkNickname(name) {
  let check = true;
  const nlen = name.length;
  const reg_nickname = /^[ㄱ-ㅎ|가-힣]+$/;

  if (!reg_nickname.test(name) || nlen < 2 || nlen >= 20) return false;

  return check;
}

function problem6(forms) {
  let answer = new Set();
  let map = new Map();

  for (let i = 0; i < forms.length; i++) {
    let name = forms[i][1];
    let crewEmail = forms[i][0];
    let check;

    check = checkNickname(name);
    if (!check) continue;

    check = checkEmail(crewEmail);
    if (!check) continue;

    for (let j = 0; j < name.length - 1; j++) {
      const key = name.substring(j, j + 2);
      if (map.has(key)) {
        const email = map.get(key);
        if (email !== forms[i][0]) {
          answer.add(email);
          answer.add(forms[i][0]);
        }
      }
      map.set(key, forms[i][0]);
    }
  }

  answer = [...answer].sort();
  return answer;
}

console.log(
  problem6([
    ['jm@email.com', '제이'],
    ['jason@email.com', '제이슨'],
    ['woniee@email.com', '워니'],
    ['mj@email.com', '엠제이'],
    ['nowm@email.com', '이제엠'],
  ])
);
