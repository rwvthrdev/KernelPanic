class Motor:

    def __init__(self, modelo):
        self.modelo = modelo

class Carro:

    def __init__(self, motor):
        self.motor = motor

mot = Motor('rgf55662x')

car = Carro(mot)

print(car.motor.modelo)