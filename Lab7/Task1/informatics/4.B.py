n = int(input())
numbers = input()
l = numbers.split()
for i in l:
    if (int(i) % 2 == 0):
        print(i,end=" ")