def end_other(a, b):
    a = a.lower()
    b = b.lower()
    n = len(a) if len(a) < len(b) else len(b)
    for i in range(n):
        if a[-1-i] != b[-1-i]:
            return False
    return True
