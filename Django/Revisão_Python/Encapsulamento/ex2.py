class Usuario:

    def __init__(self, username, senha):
        self.username = username
        self.__senha = senha

    def verificar_senha(self, senha):
        if self.__senha == senha:
            return True
        else:
            return False

us1 = Usuario('kayzen', 1234)

print(us1.verificar_senha(1224))
print(us1.verificar_senha(1234))