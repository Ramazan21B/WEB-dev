n = int(input())
arr = list(map(int,input().split()))
a = max(arr)
arr.remove(a)
a2 = max(arr)
print(a2)