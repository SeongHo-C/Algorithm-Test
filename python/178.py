# 하나의 수열에는 다양한 수가 존재한다. 이러한 수는 크기에 상관없이 나열되어 있다.
# 이 수를 큰 수부터 작은 수의 순서로 정렬해야 한다. 수열을 내림차순으로 정렬하는 프로그램을 만드시오.
N = int(input())
data = []

for _ in range(N):
    data.append(int(input()))
    
data = sorted(data, reverse = True)

for i in data:
    print(i, end=' ')