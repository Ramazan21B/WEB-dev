def front_back(str):
    if len(str) <= 1:
        return str
    mid = str[1:len(str)-1]  # can be written as str[1:-1]