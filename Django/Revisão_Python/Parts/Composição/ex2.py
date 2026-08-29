class Endereco:

    def __init__(self, rua, cidade, numero):
        self.rua = rua
        self.cidade = cidade
        self.numero = numero

class Aluno:

    def __init__(self, nome, endereco):
        self.nome = nome
        self.endereco = endereco

ende = Endereco('Rua Camões', 'Maceió', 156)

alun = Aluno('Matheus', ende)

print(alun.endereco.rua, alun.endereco.cidade, alun.endereco.numero)

