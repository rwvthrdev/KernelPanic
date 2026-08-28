class Aluno:

    def __init__(self, nome, idade, nota):
        self.nome = nome
        self.idade = idade
        self.nota = nota

al1 = Aluno('Matheus', 17, 10)
al2 = Aluno('Jorge', 15, 6.5)

print(f'Dados do aluno: Nome: {al1.nome}, Idade: {al1.idade}, Nota: {al1.nota}.')
print(f'Dados do aluno: Nome: {al2.nome}, Idade: {al2.idade}, Nota: {al2.nota}.')