class Cachorro:
    def mover(self, nome):
        print(f'{nome} está se movendo!')

class Gato:
    def mover(self, nome):
        print(f'{nome} está se movendo!')

class Passaro:
    def mover(self, nome):
        print(f'{nome} está se movendo!')

animais = [
    Cachorro(),
    Gato(),
    Passaro()
]

nomes = [
    'Rex',
    'Dumbel',
    'Parrot'
]

x = 0

for animal in animais:
    animal.mover(nomes[x])
    x+=1