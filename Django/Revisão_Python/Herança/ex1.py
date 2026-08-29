class Veiculo:

    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

class Carro(Veiculo):
    def numero_portas(self, numeroportas):
        self.numero_portas = numeroportas

class Moto(Veiculo):
    def cilindradas(self, cilindradas):
        self.cilindradas = cilindradas


c1 = Carro('Ford', 'Mustang')
c1.numero_portas(4)

m1 = Moto('Yamaha', 'Fazer')
m1.cilindradas(250)

print(f'Dados do carro: {c1.marca, c1.modelo}, nº portas {c1.numero_portas}')
print(f'Dados da moto: {m1.marca, m1.modelo}, cilindradas {m1.cilindradas}')
