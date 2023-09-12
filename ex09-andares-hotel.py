num_andares = 20
i = 0

while (i < num_andares):
    i = i + 1
    if(i == 13):
        continue
    print('andar ',i)


#em ordem descrescente...
for i in range(num_andares,0, -1):
     if i == 13:
       continue
     print('andar ',i)
