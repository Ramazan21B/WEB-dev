def Xor(x,y):
    if (x or y == 1):
        return 1
    else:
        return 0
s = input()
x,y = s.split()
print(Xor(int(x),int(y)))