class Conta:

    def __init__(self, saldo):
        self.__saldo = saldo

    def mostrar_saldo(self):
        print(self.__saldo)

    def depositar(self, valor):
        if valor > 0:
            self.__saldo += valor

c1 = Conta(100)

c1.depositar(50)
c1.mostrar_saldo()
