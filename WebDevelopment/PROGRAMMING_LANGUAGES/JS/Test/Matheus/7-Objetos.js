/// sintaxe basica

// Objeto vazio
const pessoa = {};

// Objeto com propriedades
const pess = {
    nome : 'Matheus',
    idade : 30,
    profissao : 'Developer'
};

console.log(pess.nome);
console.log(pess['idade']);

// Adicionando propriedades

pess.email = 'joao@gmail.com';

pess.idade = 31;

delete pess.profissao;

console.log('nome' in pess);
console.log(pess.hasOwnProperty('nome'));


// Objetos Aninhados

const usuario = {
    nome : 'maria',
    endereco : {
        rua : 'avenida menino marcelo',
        numero : 205,
        cidade : 'São Paulo'
    },
    contato : {
        email : 'joaozinho@gmail.com',
        telefone : '(11) 99656-6635'
    }
};

console.log(usuario.endereco.cidade);

// Shorthand Properties

const nome = 'Carlos';
const idade = '25';

//forma antiga
const pessoa1 = {
    nome : nome,
    idade : idade
};

//forma nova
const pessoa2 = {
    nome,
    idade
};

//Computed Property Names
const chave = 'email';
const valor = 'joao@rmail.com';

const user = {
    nome : 'joao',
    [chave] : valor,
    [`${chave}_confirmado`] : true
}

console.log(user);

// METODOS