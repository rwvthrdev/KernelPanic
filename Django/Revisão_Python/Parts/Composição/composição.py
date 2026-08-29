class Processador:

    def __init__(self, modelo):
        self.modelo = modelo

class Computador:

    def __init__(self, processador):
        self.processador = processador

cpu = Processador('Ryzen 7')

pc = Computador(cpu)

print(pc.processador.modelo)