n = int(input())
numbers = set(map(int,input().split()))
num = int(input())
for i in range(num):
    k = input().split()
    if (k[0] == "remove"):
        numbers.remove(int(k[1]))
    elif (k[0] == "discard"):
        numbers.discard(int(k[1]))
    else:
        numbers.pop()
print(sum(list(numbers)))

