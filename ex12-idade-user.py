# Instruções do projeto
# Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021.
# A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

# Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.


def data_user():
    nome = input('Digite seu nome completo: ')
    idadeCorreta = False
    while(idadeCorreta == False): 
         try:
            idade = int(input('Digite seu ano de nascimento: '))
            if(idade >= 1922 and idade <= 2021):
                idadeCorreta = True
                print('Nome:' + nome, ', Idade:' + str(idade))
            else:
                print('Você digitou um ano inválido. Por favor digite um ano entre 1922 e 2021.')
         except:
             print('Caracter inválido, Por favor digite um ano entre 1922 e 2021.')

data_user()