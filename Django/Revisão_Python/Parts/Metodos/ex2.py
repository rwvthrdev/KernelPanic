class Cachorro:

    def __init__(self, nome, humor, estado_da_fome):
        self.nome = nome
        self.humor = humor
        self.fome = estado_da_fome

    def latir(self):
        if self.humor == 'feliz':
            print(f'{self.nome} está latindo!')
        else:
            print(f'{self.nome} está cabisbaixo')

    def comer(self):
        if self.fome == 'sim':
            print(f'{self.nome} está comendo!')
        else:
            print(f'{self.nome} não está com fome!')

dog = Cachorro('Rex', 'feliz', 'sim')
dog2 = Cachorro('Baruk', 'triste', 'não')

dog.latir()
dog.comer()

dog2.latir()
dog2.comer()
