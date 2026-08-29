class Animal:
    def __init__(self, nome):
        self.nome = nome

class Cachorro(Animal):
    def __init__(self, nome, raca):
        super().__init__(nome)
        self.raca = raca

dog = Cachorro('Rex', 'Pastor Alemão')

print(dog.nome)
print(dog.raca)