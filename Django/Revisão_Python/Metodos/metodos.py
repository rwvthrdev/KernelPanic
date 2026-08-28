class Pessoa:

    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def apresentar(self):
        print(f'Olá meu nome é {self.nome}!')


pessoa = Pessoa('Matheus', 17)

pessoa.apresentar()

class Calculadora:

    def somar(self, a, b):
        return a + b

    def subtrair(self, a, b):
        return a - b

    def multiplicar(self, a, b):
        return a * b

    def dividir(self, a, b):
        if b == 0:
            print('Erro. Divisão por zero.')
        else:
            return a / b

calc = Calculadora()

print(calc.somar(10,5))
print(calc.subtrair(10,5))
print(calc.multiplicar(10,5))
print(calc.dividir(10,5))