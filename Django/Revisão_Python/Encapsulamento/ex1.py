class Cofre:

    def __init__(self, dinheiro):
        self.__dinheiro = dinheiro

    def adicionar_dinheiro(self, valor):
        self.__dinheiro += valor

    def mostrar_dinheiro(self):
        return f'O seu valor em dinheiro é de R$ {self.__dinheiro}.'

co1 = Cofre(1203.60)

print(co1.mostrar_dinheiro())

co1.adicionar_dinheiro(500)
print(co1.mostrar_dinheiro())