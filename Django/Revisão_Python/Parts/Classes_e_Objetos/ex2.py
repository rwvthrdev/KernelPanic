class Livro:
    pass

livro1 = Livro()
livro2 = Livro()

livro1.titulo = 'A metamorfose'
livro1.autor = 'Franz Kafka'
livro1.paginas = 96

livro2.titulo = 'Nunca é Hora de Parar'
livro2.autor = 'David Goggins'
livro2.paginas = 280

print(f'Livro 1: Título: {livro1.titulo}, Autor: {livro1.autor}, Páginas: {livro1.paginas}')
print(f'Livro 2: Título: {livro2.titulo}, Autor: {livro2.autor}, Páginas: {livro2.paginas}')