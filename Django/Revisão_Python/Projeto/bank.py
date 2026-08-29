class Conta:

    def __init__(self, titular, saldo):
        self.titular = titular
        self.__saldo = saldo

    def depositar(self, valor):
        self.__saldo += valor

    def sacar(self, valor):
        if self.__saldo < valor:
            print('Saldo Insuficiente!')
        else:
            self.__saldo -= valor

    def mostrar_saldo(self):
        print(f'O saldo da sua conta é de R$ {self.__saldo}.')

    def __str__(self):
        return f'{self.titular} - R$ {self.__saldo:.2f}'

    def get_saldo(self):
        return self.__saldo

class ContaCorrente(Conta):

    def sacar(self, valor):
        super().sacar(valor + 5)

class ContaPoupanca(Conta):

    def sacar(self, valor):
        super().sacar(valor)

c1 = ContaCorrente('Matheus', 1000)
c2 = ContaPoupanca('João', 1000)

c1.depositar(500)
c1.sacar(200)

c2.depositar(300)
c2.sacar(200)

print(c1)
print(c2)