// * Loop For

for (let i = 1; i <= 5; i++) {
    console.log(`Numero: ${i}`);
}

// exmeplo com array

const frutas = ['maça', 'banana', 'laranja'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i + 1}: ${frutas[1]}`);
}

// Tabuada no 1 ao 3

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// * Loop While

let contador = 1;

while (contador <= 5) {
    console.log(`Contador ${contador}`);
    contador++;
};

// * do..While

let i = 1;

do {
    console.log(`Execução: ${i}`);
    i++;
} while (i <= 3);

// Diferença

let x = 5;

while (x < 3) {
    console.log('Isso nunca vai rodar.');
}

let y = 5;

do {
    console.log('Isso executa pelo menos uma vez.')
} while (y < 3);

// exemplo

let opcao;

do {
    console.log('Menu:');
    console.log('1 - Ver saldo');
    console.log('2 - Depositar');
    console.log('3 - Sacar');
    console.log('0 - Sair');

    opcao = 0;

    switch(opcao) {
        case 1:
            console.log('Saldo: R$ 1000');
            break;
        case 2:
            console.log('Deposito realizado.');
            break;
        case 3:
            console.log('Saque realizado.');
            break;
    }
} while (opcao !== 0);

console.log('Sistema encerrado');

// * for..of

const cores = ['amarelo', 'vermelho', 'verde'];

for (const cor of cores) {
    console.log(cor);
};

// exemplo com string

const nome = 'JavaScript';

for (const letra of nome) {
    console.log(letra);
};

// Exemplo com Set e Map

const numeros = new Set([1, 2, 3, 4]);

for (const num of numeros) {
    console.log(num);
};

const mapa = new Map([
    ['nome', 'João'],
    ['idade', 30]
])

for (const [chave, valor] of mapa) {
    console.log(`${chave} : ${valor}`);
};

// vs for normal

const dados = ['A', 'B', 'C'];

for (let i = 0; i < dados.length; i++) {
    console.log(dados[i]);
}

for (const valor of dados) {
    console.log(valor);
}

// for in

const pessoa = {
    nome : 'Maria',
    idade : 25,
    cidade : 'São Paulo'
};

for (const propriedade in pessoa) {
    console.log(propriedade, pessoa[propriedade]);
}

