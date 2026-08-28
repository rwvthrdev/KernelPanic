class Produto:

    def __init__(self, nome, preco, quantidade):
        self.nome = nome
        self.preco = preco
        self.quantidade = quantidade

    def __str__(self):
        return f'{self.nome} - R$ {self.preco:.2f} - Estoque: {self.quantidade}'

p1 = Produto("Mouse", 80, 15)

print(p1)