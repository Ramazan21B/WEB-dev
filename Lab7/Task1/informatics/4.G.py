n = int(input())
numbers = input()
l = numbers.split()
for i in range(n // 2):
    a = l[i]
    l[i] = l[n - 1 - i]
    l[n - 1 - i] = a
for i in l:
    print(i,end=" ")