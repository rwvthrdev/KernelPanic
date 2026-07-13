// Strings

let nome = 'Matheus';
let hello = 'Olá!';
let template = `Meu nome é ${nome}`;

console.log(typeof nome);

// Number

let idade = 30;
let preco = 19.99;
let negativo = -5;

console.log(typeof idade);
console.log(10/0);
console.log(-10/0);
console.log('abc' * 2); //Not a Number

// Boolean

let ativo = true;
let desligado = false;

console.log(typeof ativo);

// Undefined

let x;
console.log(x);
console.log(typeof x);

// Null

let usuario = null;
console.log(typeof usuario);

// Symbol

let id = Symbol('id');
let id2 = Symbol('id');

console.log(id == id2);
console.log(typeof id);

// Bigint

let numeroGrande = 5454444444454n;
let outro = BigInt('1215545446464661');

console.log(typeof numeroGrande);

// Comparação

let a = 1;
let b = 1;
let c = '1';

console.log(a === b);
console.log(a == b)
console.log(a === c);
console.log(a == c);

// ======================================
// Exercício

const produto =  {
    nome: 'Notebook',
    preco: 2574.90,
    estoque: 50,
    disponivel : 50 > 0,
    get disponivel() {
        return this.estoque > 0;
    },
    codigoBarras: Symbol('54814848'),
    categoria: 'Eletrônico',
    peso: 2.520,
}

const produtoID = 'NOTB-500';
const desconto = 0.15;
const emPromocao = desconto > 0;
const dataCadastro = undefined;
const dataRemocao = null;
const estoqueMinimo = 30n;
const idUnico = Symbol('36');

const precoComDes = produto.preco * (1 - desconto);
const isDisponible = produto.disponivel === true ? "Disponível" : 'Não disponível';

const equal = produtoID === "NOTB-500";
console.log(equal);

console.log(dataCadastro);
console.log(dataRemocao);

const comp = produto.codigoBarras === idUnico;
console.log(comp);

const plus = produto.estoque + Number(estoqueMinimo);
console.log(plus);

console.log(typeof produtoID, typeof desconto, typeof emPromocao, typeof dataCadastro, typeof dataRemocao, typeof estoqueMinimo, typeof idUnico);

function exibirInfoProd() {
    const mensagem = `
        Nome do produto: ${produto.nome}
        Preço do produto: ${produto.preco.toFixed(2)}
        Estoque: ${produto.estoque} unidades
        Status promoção: ${emPromocao ? 'Sim' : 'Não'}
        Código de barras: ${produto.codigoBarras.description}
    `
    console.log(mensagem);
}

exibirInfoProd()









//byKayzen