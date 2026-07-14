//VAR
var nome = 'joão';
var idade = 15

//Escopo: Função ou Global;
//Pode ser redeclarada no mesmo escopo;
//Hosting: Elevada para o topo;

//LET
let cidade = 'são paulo';
cidade = 'rio de janeiro';

//Escopo: bloco;
//Não pode ser redeclarada no mesmo escopo;
//Hosting: elevada, mas não reinicializada;


//CONST
const PI = 3.14159;
const usuario = {nome: 'maria', idade: 30};
usuario.idade = 31 //pode modificar propriedades;

//Escopo: bloco;
//Não pode ser reatribuida, mas objetos/arrays podem ser modificados;
//Obrigatório inicializar na declaração;

//REGRAS

//Permitido:

//Letras de (a-z, A-Z);
//Números, mas não no inicio;
//$ e _;
//Palavras com acento;

//Não permitido:

//Palavras reservadas: if, else, let;
//Espaços;
//Começar com números;


//camelCase
let nomeCompletoDoUsuario;
const dataNascimento;

//snake_case
let nome_completo;

//PascalCase (para classes)
class Usuario {};

//UPER_SNAKE_CASE (para constantes)
const COR_PRIMARIA = '#FF0000';
const MAX_TENTATIVAS = 5;

//Tipos de Dados em Variáveis
let valor = 10;
valor = 'texto';
valor = true;
valor = null;
valor = undefined;
valor = {chave: 42};
valor = [1, 2, 3];