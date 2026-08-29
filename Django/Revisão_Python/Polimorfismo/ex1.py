class Pix:
    def pagar(self, valor):
        self.valor = valor
        print(f'Valor pago: R$ {self.valor}!')

class Cartao:
    def pagar(self, valor):
        self.valor = valor
        print(f'Valor pago: R$ {self.valor}!')

formas = [
    Pix(),
    Cartao()
]

for forma in formas:
    forma.pagar(100)