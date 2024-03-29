function findfriendFriends(userFriends, friends, user) {
  const findFriends = [];

  const userFilter = friends.filter((friends) => !friends.includes(user));
  for (let [a, b] of userFilter) {
    if (userFriends.includes(a) && !userFriends.includes(b)) {
      findFriends.push(b);
    } else if (userFriends.includes(b) && !userFriends.includes(a))
      findFriends.push(a);
  }

  return findFriends;
}

function findUserFriends(user, friends) {
  const findFriends = [];

  for (let x of friends) {
    if (x.includes(user)) {
      if (x[0] === user) findFriends.push(x[1]);
      else findFriends.push(x[0]);
    }
  }

  return findFriends;
}

function problem7(user, friends, visitors) {
  let answer = [];
  const recommend = new Map();

  const userFriends = findUserFriends(user, friends);
  const friendFriends = findfriendFriends(userFriends, friends, user);

  for (let x of friendFriends) {
    if (recommend.has(x)) {
      recommend.set(x, recommend.get(x) + 10);
    } else {
      recommend.set(x, 10);
    }
  }

  for (let x of visitors) {
    if (!userFriends.includes(x))
      if (recommend.has(x)) {
        recommend.set(x, recommend.get(x) + 1);
      } else {
        recommend.set(x, 1);
      }
  }

  let recommendSort = [...recommend].sort((a, b) => {
    if (a[1] > b[1]) return 1;
    else if (a[1] === b[1]) {
      if (a[0] > b[0]) return 1;
      else return -1;
    } else return 0;
  });

  if (recommendSort.length > 5) recommendSort = recommendSort.slice(0, 5);
  for (let x of recommendSort) answer.push(x[0]);

  return answer;
}

console.log(
  problem7(
    'mrko',
    [
      ['mrko', 'jun'],
      ['donut', 'jun'],
      ['donut', 'mrko'],
      ['shakevan', 'andole'],
      ['shakevan', 'jun'],
      ['shakevan', 'mrko'],
    ],
    ['bedi', 'bedi', 'donut', 'bedi', 'shakevan']
  )
);
