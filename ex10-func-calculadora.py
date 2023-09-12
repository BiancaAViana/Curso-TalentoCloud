# Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
# 1. Soma
# 2. Subtração
# 3. Multiplicação
# 4. Divisão

# Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

def calculadora(n1, n2, operacao):
    if(operacao == 1):
        soma = n1 + n2
        return soma
    elif(operacao == 2):
        subtracao = n1 - n2
        return subtracao
    elif(operacao == 3):
        multiplicacao = n1 * n2
        return multiplicacao
    elif(operacao == 4):
        divisao = n1 / n2
        return divisao
    else: return 0

resultado = calculadora(4, 2, 1)
print(resultado)