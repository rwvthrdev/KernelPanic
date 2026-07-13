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








