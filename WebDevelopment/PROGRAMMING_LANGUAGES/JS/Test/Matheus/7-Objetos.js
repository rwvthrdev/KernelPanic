//sintaxe
const pessoa = {
    nome: 'joao',
    idade: 30,
    cidade: 'sao paulo',
    // metodo
    saudacao : function() {
        return 'Olá meu nome é ' + this.nome;
    }
};

console.log(pessoa.nome);
console.log(pessoa['idade']);
console.log(pessoa.saudacao());

// * Criando Objeto

