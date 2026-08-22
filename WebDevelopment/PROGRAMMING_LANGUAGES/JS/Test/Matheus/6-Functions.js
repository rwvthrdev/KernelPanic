//Declaração

function saudacao(nome) {
    return 'Olá ' + nome + '!';
};

console.log(saudacao('Matheus'));

// * Hosting
// Funciona antes de ser declarada

console.log(soma(5, 3));

function soma(a, b) {
    return a + b;
};

// * Function Expression
// Associar funções a variáveis

const multiplicar = function (a, b){
    return a * b;
};

console.log(multiplicar(5, 6));

// Function Expression anônima

const dividir = function (a, b) {
    return a / b;
};

// Function Expression Nomeada

const fatorial = function fac(n) {
    return n <= 1 ? 1 : n * fac(n -1);
};

console.log(fatorial(5));

// * Arrow Functions

//sem parâmetros
const ola = () => 'Olá!';
console.log(ola());

//com um parâmetro (parêntesis opicional)
const quadrado = x => x ** 2;
console.log(quadrado(5));

//corpo com múltiplas linhas
const calcular = (a, b) => {
    const resultado = a + b;
    return resultado * 2;
};
console.log(calcular(2, 6));

//? Comparação entre Arrow e Fun. Express

//Express
const pessoa = {
    nome : 'maria',
    saudacao : function(){
        setTimeout(function(){
            console.log(this.nome) //undefined
        }, 1000);
    }
};

//Arrow
const pessoa2 = {
    nome : 'maria',
    saudacao : function() {
        setTimeout(() => {
            console.log(this.nome); //maria
        }, 1000);
    }
};

//* Default parameters

function saudacao2(nom3='Visitante'){
    return 'Olá, ' + nom3 + '!';
};

console.log(saudacao2());
console.log(saudacao2('Ana'));

//Parametros com valores dinâmicos

function criarUsuario(nome, idade = 18, ativo = true) {
    return {nome, idade, ativo};
};

console.log(criarUsuario('João'));
console.log(criarUsuario('Pedro', 55, false));

function calculaPer(preco, desconto = preco * 0.1) {
    return preco - desconto;
};

console.log(calculaPer(10));
console.log(calculaPer(10, 0.6));

//* Rest parameters

function somarTodos(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
};
console.log(somarTodos(3,0,6,58));

function criarLista(separador, ...itens) {
    return itens.join(separador);
};

console.log(criarLista(',', 'maçã', ' banana', ' laranja'));

//combinando com paramtros normais

function exibirProduto(categoria, ...produtos) {
    console.log('Categoria: ' + categoria);
    produtos.forEach(produto => console.log('- ' + produto));
};

exibirProduto('Frutas', 'Maçã', 'Banana', 'Uva' );

//* Spread Operator

//Em arrays

const numeros1 = [1,2,3];
const numeros2 = [4,5,6];

const todos = [...numeros1, ...numeros2];
console.log(todos);

//copiar array
const copia = [...numeros1];

//passar elementos como argumentos

const nums = [5, 2, 8, 3];
console.log(Math.max(...nums));

//Em objetos

const usuario = {
    nome: 'Matheus',
    idade: 25
};

const endereco = {
    cidade: 'São Paulo',
    estado: 'SP'
}

const perfil = {...usuario, ...endereco};
console.log(perfil);

// Sobrescrever propriedades
const novoUsuario = {...usuario, idade : 18};
console.log(novoUsuario);

// * Closures

function contador() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const meuContador = contador();
console.log(meuContador());
console.log(meuContador());
console.log(meuContador());

//closure com parametro

function multiplicador(fator) {
    return function(numero) {
        return numero * fator;
    };
};

const duplicar = multiplicador(2);
const triplicar = multiplicador(3);

console.log(duplicar(5));
console.log(triplicar(5));

// * Escopo

// Global
var global = 'sou global';
let escopoBloco = 'tambem global';

function teste() {
    console.log(global);
};

// Escopo de função

function exemplo() {
    var interno = 'Só dentro da função';
    let outro = 'Também dentro';

    console.log(interno);
};

console.log(interno);

// Escopo de bloco

if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
}

console.log(x);
console.log(y);
console.log(z);

// Callback

function processar(dados, callback) {
    const resultado = dados * 2;
    callback(resultado);
}

processar(5, function(valor) {
    console.log('Resultado: ' + valor)
});

// Callback assíncrono

function buscarDados(callback) {
    setTimeout(() => {
        const dados = {id : 1, nome : 'João'};
        callback(dados);
    }, 1000)
}

buscarDados((dados) => {
    console.log('Dados Recebidos: ', dados)
});

// Callback com arrays

const numeros = [1,2,3,4,5];

//forEach
numeros.forEach(function(num) {
    console.log(num * 2);
});

//filter
const pares = numeros.filter(function(num) {
    return num % 2 == 0;
});

//map
const dobrados = numeros.map(function(num) {
    return num * 2;
});

// Função de Alta Ordem

const users = [
    {nome : 'Ana', idade : 25},
    {nome : 'João', idade : 30},
    {nome : 'Maria', idade : 20}
];

const maiores = users.filter(user => user.idade >= 25);

const nomes = users.map(user => user.nome);

const somaIdades = users.reduce((total, user) => total + user.idade, 0);

users.forEach(user => console.log(user.nome));

// Criando função de alta ordem

function criarOperacao() {
    return function(a, b) {
        switch(operacao) {
            case 'soma' : return a + b;
            case 'subtracao' : return a - b;
            case 'multiplicacao' : return a * b;
            default : return null;
        }
    };
}

const soma = criarOperacao('soma');
const multiplicacao = criarOperacao('multiplicacao');

console.log(soma(5, 3));
console.log(multiplicacao(5, 3));

