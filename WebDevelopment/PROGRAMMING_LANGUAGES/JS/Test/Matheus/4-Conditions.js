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
        console.log('Sábado'):
        break
    case 7:
        console.log('Domingo');
        break
    default:
        console.log('Dia inválido.')
}

// Agrupando

day = 'Terca';

switch (day) {
    case "Segunda":
    case "Terca":
    case "Quarta":
    case "Quinta":
    case "Sexta":
        console.log("Dia útil");
        break;
    case "Sábado":
    case "Domingo":
        console.log("Fim de semana");
        break;
}
