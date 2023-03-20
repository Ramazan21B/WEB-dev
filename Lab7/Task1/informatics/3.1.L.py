n = input()
m = 1
dec = 0
for i in n:
    i = int(i)
    dec = dec + (i * m)
    m = m * 2
print(dec)
