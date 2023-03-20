n = int(input())
cnt = 0
for i in range(n + 1):
    if int(input()) == 0:
        cnt += 1
print(cnt)
