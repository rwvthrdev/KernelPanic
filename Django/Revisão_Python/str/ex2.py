class Filme:

    def __init__(self, titulo, ano, genero):
        self.titulo = titulo
        self.ano = ano
        self.genero = genero

    def __str__(self):
        return f'Titulo do filme: {self.titulo}, Ano: {self.ano}, Gênero: {self.genero}.'

f1 = Filme('Sniper Americano', 2014, 'Ação Policial')

print(f1)