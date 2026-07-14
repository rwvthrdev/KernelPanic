// Operadores aritiméticos
let n1 = 3;
let n2 = 5;

console.log(n1+n2); //Soma
console.log(n2-n1); //Subtração
console.log(n2*n1); //Multiplicação
console.log(n2/n1); //Divisão
console.log(n2 % n1); //Módulo
console.log(n2 ** n1) //Exponenciação

let counter = 5
console.log(counter++) //Adiciona 1
console.log(++counter)

console.log(counter--) //Subtrai 1 
console.log(--counter)

// Operadores de Atribuição

let x = 10;
let y = 2

x += 5;
console.log(x);

x -= 3;
console.log(x);

x *= 2;
console.log(x);

x /= 4;
console.log(x);

x %= 5;
console.log(x);

y **= 2;
console.log(y)

// Operadores de comparação

a = 5;
b = '5';

console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);

console.log(10 > 6);
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 >= 6);

// Operadores lógicos

let idade = 25;
let temCNH = true;

console.log(idade >= 18 && temCNH); //AND

console.log(idade >= 18 || temCNH) // OR

console.log(!temCNH) //NOT

console.log(0 && 10);
console.log(5 || 0);

let cico = 10
let nana = 5

if (cico === 5 || cico === 10) {
    console.log('Melão');
} else {
    console.log('Abacaxi')
}

if (cico === 10 && nana === 5) {
    console.log('Bananinha');
} else {
    console.log('Maçã')
}

// Operador ternário

idade = 20;
let status = idade >= 18 ? 'Maior de idade' : 'Menor de idade';
console.log(status);

let nota = 85;
let conceito = nota >= 90 ? 'A' : nota >= 80 ? 'B' : 'C';
console.log(conceito);

// Operadores de tipo

console.log(typeof 42);
console.log(typeof 'JavaScript');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof function(){});

console.log([] instanceof Array);
console.log({} instanceof Object);

// Operadores Bitwise

console.log(5 & 1);
console.log(5 | 1);
console.log(5 ^ 1);
console.log(~5);
console.log(5 << 1);
console.log(5 >> 1);

// Operador de String

let nome = "João";
let sobrenome = "Silva";

console.log(nome + ' ' + sobrenome);
console.log('Idade: ' + 25);
console.log('5' + 5);
console.log(5 + '5');
console.log(5 + 5 + "5");

// Operador de virgula

let h, i, j;
h = 1, i = 2, j = 3;
console.log(h, i, j);

for (let n = 0, l = 10; n <= l; n++, j--) {
    console.log(n, l)
}


// Operador opicional

const usuario = {
    nome: 'ana',
    endereco: {
        cidade: 'são paulo'
    }
};

console.log(usuario?.endereco?.cidade);
console.log(usuario?.contato?.email);

const lista = [];
console.log(lista?.[0]);

// Operador Nullish Coalescing

let nomer = null;
let nomeUsuario = nomer ?? "Visitante";
console.log(nomeUsuario);

let idadex = 0;
let idadeUsuario = idadex ?? 18;
console.log(idadeUsuario);

console.log(0 || 10);
console.log(0 ?? 10);

// Operadores especiais

//delete
const pessoa = {nome: 'Carlos', idade: 30};
console.log(pessoa);
delete pessoa.idade;
console.log(pessoa);

//in
console.log('nome' in pessoa);
console.log('idade' in pessoa);

//void
console.log(void 0);
console.log(void (5 + 3));

// Coerção de tipos

//String + Number = String
console.log('10' + 20);
console.log(20 + '10');

//Number - String = Number
console.log('10' - 5);
console.log('10' * '2');
console.log('10' / '2');
console.log('abc' - 5);

//Booleano em números
console.log(true + 1);
console.log(false + 1);