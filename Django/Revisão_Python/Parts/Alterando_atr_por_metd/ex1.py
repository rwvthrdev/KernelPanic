class Conta:

    def __init__(self, titular, saldo):
        self.titular = titular
        self.saldo = saldo

    def depositar(self, valor):
        self.saldo += valor

    def sacar(self, valor):
        if self.saldo < valor:
            print('Saldo insuficiente!')
        else:
            self.saldo -= valor

    def mostrar_saldo(self):
        print(f'Saldo: {self.saldo:.2f}')

conta1 = Conta('Matheus', 2500)

conta1.mostrar_saldo()

conta1.depositar(50)
conta1.mostrar_saldo()

conta1.sacar(2600)



