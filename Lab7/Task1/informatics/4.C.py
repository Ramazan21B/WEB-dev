n = int(input())
numbers = input()
l = numbers.split()
cnt = 0
for i in l:
    if (int(i) > 0):
        cnt += 1
print(cnt)