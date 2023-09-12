# Faça uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:

# 1: Soma
# 2: Subtração
# 3: Multiplicação
# 4: Divisão
# 0: Sair

# Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

# Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar.

# É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 

def calculadora():
    operacao = ''
    while(operacao != 0):
        operacao = int(input('Qual operação será realizada? \n 1:Soma; 2:Subração; 3: Muliplicação; 4:Divisão; 0: Sair'))
  
        if(operacao == 1):  
            n1 = int(input('Digite o primeiro numero: '))
            n2 = int(input('Digite o segundo numero: '))
            soma = n1 + n2
            print(soma)
        elif(operacao == 2):
            n1 = int(input('Digite o primeiro numero: '))
            n2 = int(input('Digite o segundo numero: '))
            subtracao = n1 - n2
            print(subtracao)
        elif(operacao == 3):
            n1 = int(input('Digite o primeiro numero: '))
            n2 = int(input('Digite o segundo numero: '))
            multiplicacao = n1 * n2
            print(multiplicacao)
        elif(operacao == 4):
            n1 = int(input('Digite o primeiro numero: '))
            n2 = int(input('Digite o segundo numero: '))
            divisao = n1 / n2
            print(divisao)
        elif(operacao != 0):
            print('Essa opção não existe.')
   
    print('Calculadora desligada.')

##executando a função
calculadora()
