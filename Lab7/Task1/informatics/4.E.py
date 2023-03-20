n = int(input())
numbers = input()
l = numbers.split()
a = True
for i in range(1,n):
    if (int(l[i])>= 0 and int(l[i] - 1)>= 0) or (int(l[i]) <= 0 and int(l[i] - 1)<= 0):
        print("YES")
        a = False
        break
if a:
    print("NO")
