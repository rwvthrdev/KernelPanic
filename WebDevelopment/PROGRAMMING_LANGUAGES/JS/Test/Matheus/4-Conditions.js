// if, else if, else

let numero = 13;
let agua = true

if (numero >= 10 && agua === false) {
    console.log('Bom dia!');
} else if (numero >= 10 && agua == true) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!')
}

//Operador ternário

idade = 20;
const resultado = idade >= 18 ? 'Maior de idade' : 'Menor de idade';
console.log(resultado);

//aninhado
nota = 8.5;
const status = nota >= 7 ? 'Aprovado': nota >= 5 ? 'recuperação' : 'reprovado';
console.log(status);

//executando funções

name = 'Matheus'

function TOuPPER () {
    return name.toUpperCase();
}

function TOlOWER () {
    return name.toLowerCase();
}

nomeProprio = true
const toUpperLower = nomeProprio === true ? TOuPPER() : TOlOWER();
console.log(toUpperLower);

//switch case

dia = 3

switch (dia) {
    case 1: 
        console.log('Segunda');
        break
    case 2: 
        console.logI('Terça');
        break
    case 3:
        console.log('Quarta');
        break
    case 4:
        console.log('Quinta');
        break
    case 5:
        console.log('Sexta');
        break
    case 6:
        console.log('Sábado');
        break;
    case 7:
        console.log('Domingo');
        break
    default:
        console.log('Dia inválido.')
}

// Agrupando

day = "Sábado";

switch (day) {
    case 'Segunda':
    case 'Terça':
    case 'Quarta':
    case 'Quinta':
    case 'Sexta':
        console.log('Dia útil.');
        break
    case 'Sábado':
    case 'Domingo':
        console.log('Fim de samana');
        break;
    default:
        console.log('Dia inválido');
}

// Usando expressões com switch true

switch (true) {
    case nota >= 7:
        console.log('Aprovado.');
        break;
    case nota >= 5:
        console.log('Recuperação.');
        break;
    defalt:
        console.log('Reprovado.')
}

// Early Return

const usuario = {
    nome : 'Matheus',
    idade : 17,
    endereco : {
        cidade : 'São Paulo',
        rua : 'Rua dos Sonhos',
        numero : 115,
        estado : 'São Paulo',
    },
    ativo : false,
}

function validarUser(usuario) {
    if (!usuario) return "Usuario não existe";
    if (usuario.idade < 18) return "Menor";
    if (!usuario.ativo) return "Inativo";
    return "Válido";
}

console.log(validarUser(usuario))

// Object Mapping

const cores = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
};

const cor = cores[cores.red] || '#000000'; //fallback

// Map / Filter / Reduce

const numeroszinhos = [1,2,3,4,5,6];
const pares = numeroszinhos.filter(n => n % 2 === 0);

const somaPares = numeroszinhos.reduce((acc, n) => n % 2 === 0 ? acc + n : acc, 0);

// Short-circuit Evaluation

const nome = usuario && usuario.nome;

const cidade = usuario.endereco.cidade ?? 'São Paulo';

const dados = usuario && usuario.endereco && usuario.endereco.cidade || 'Sem cidade';

console.log(dados);




