class Retangulo:

    def __init__(self, lado1, lado2):
        self.lado1 = lado1
        self.lado2 = lado2

    def calcular_area(self):
        return self.lado1 * self.lado2

    def calcular_perimetro(self):
        return 2 * self.lado1 + 2 * self.lado2

retangulo3x4 = Retangulo(3,4)

print(retangulo3x4.calcular_area())
print(retangulo3x4.calcular_perimetro())

