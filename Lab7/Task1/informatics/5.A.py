def min(a,b,c,d):
    if b < a:
        a = b
    if c < a:
        a = c
    if d < a:
        a = d
    print(a)
s = input()
a,b,c,d = s.split()
min(int(a),int(b),int(c),int(d))