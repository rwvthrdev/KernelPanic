class Animal:

    def __init__(self, nome):
        self.nome = nome

    def comer(self):
        print(f'{self.nome} está comendo.')

class Cachorro(Animal):

    def latir(self):
        print(f'{self.nome} está latindo.')

dog1 = Cachorro('Rex')

dog1.comer()
dog1.latir()