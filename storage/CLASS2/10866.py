# 정수를 저장하는 덱(Deque)를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
# 명령은 총 여덟 가지이다.
# push_front X: 정수 X를 덱의 앞에 넣는다.
# push_back X: 정수 X를 덱의 뒤에 넣는다.
# pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
# pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
# size: 덱에 들어있는 정수의 개수를 출력한다.
# empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
# front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
# back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
import sys
from collections import deque

input = sys.stdin.readline
N = int(input())
data = []
deq = deque([])

for i in range(N):
    data.append(input())
    
for command in data:
    if 'push_front' in command:
        num = command.split()[1]
        deq.appendleft(int(num))
    elif 'push_back' in command:
        num = command.split()[1]
        deq.append(int(num))
    elif 'pop_front' in command:
        if len(deq) == 0:
            print(-1)
        else:
            print(deq[0])
            deq.popleft()
    elif 'pop_back' in command:
        if len(deq) == 0:
            print(-1)
        else:
            print(deq[-1])
            deq.pop()
    elif 'size' in command:
        print(len(deq))
    elif 'empty' in command:
        if len(deq) == 0:
            print(1)
        else:
            print(0)
    elif 'front' in command:
        if len(deq) == 0:
            print(-1)
        else:
            print(deq[0])
    else:
        if len(deq) == 0:
            print(-1)
        else:
            print(deq[-1])