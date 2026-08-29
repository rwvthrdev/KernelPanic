class Cachorro:

    def emitir_som(self):
        print('Au Au!')

class Gato:

    def emitir_som(self):
        print('Miau!')


animais = [
    Cachorro(),
    Gato()
]

for animal in animais:
    animal.emitir_som()