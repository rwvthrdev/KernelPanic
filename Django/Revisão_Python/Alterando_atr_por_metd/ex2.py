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

    def transferir(self, conta_destino, valor):
        if self.saldo < valor:
            print('Saldo insuficiente!')
        else:
            conta_destino.saldo += valor
            self.saldo -= valor

conta1 = Conta('Matheus', 3000)
conta2 = Conta('Mariana', 1500)

print('Antes')
conta1.mostrar_saldo()
conta2.mostrar_saldo()

conta1.transferir(conta2, 2500)

print('\nDepois')
conta1.mostrar_saldo()
conta2.mostrar_saldo()

