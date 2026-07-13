Esse plano foi pensado para ser concluído em cerca de **12 semanas**.
---
# Fase 1 — Fundamentos da Linguagem (Semana 1)

**Objetivo:** entender a sintaxe e a lógica do JavaScript.

## Dia 1

* Como o JavaScript funciona
* V8
* Node.js
* Navegador
* ECMAScript
* Como executar código

---

## Dia 2

Tipos primitivos

```js
let nome = "Matheus";
let idade = 17;
let ativo = true;
let valor = null;
let indefinido = undefined;
let id = Symbol();
let numeroGrande = 10n;
```

---

## Dia 3

Variáveis

```js
let
const
var
```

Entenda:

* Escopo
* Hoisting
* Temporal Dead Zone

---

## Dia 4

Operadores

* Aritméticos
* Comparação
* Lógicos
* Nullish (`??`)
* Optional Chaining (`?.`)
* Ternário

---

## Dia 5

Condicionais

```js
if

else

switch
```

---

## Dia 6

Loops

```js
for

while

do while

for...of

for...in
```

---

## Dia 7

Projeto:

Calculadora simples.

---

# Fase 2 — Funções (Semana 2)

Essa é uma das partes mais importantes.

Aprenda:

Declaração

```js
function soma(a, b) {
    return a + b;
}
```

---

Function Expression

```js
const soma = function(){}
```

---

Arrow Functions

```js
const soma = (a,b)=>a+b;
```

---

Parâmetros padrão

```js
function ola(nome="Visitante"){}
```

---

Rest

```js
function soma(...nums){}
```

---

Spread

```js
const copia = [...array];
```

---

Closures ⭐

---

Escopo

---

Callback

---

Funções de Alta Ordem

---

Projeto

Lista de tarefas.

---

# Fase 3 — Objetos (Semana 3)

Aprenda:

Objetos

```js
const pessoa = {

}
```

---

Métodos

---

This

---

Prototype

---

Prototype Chain

---

Classes

---

Herança

---

Projeto

Sistema de usuários.

---

# Fase 4 — Arrays (Semana 4)

Domine completamente.

Métodos:

```js
push()

pop()

shift()

unshift()

splice()

slice()

concat()

includes()

indexOf()

find()

findIndex()

filter()

map()

reduce()

some()

every()

sort()

reverse()

flat()

flatMap()
```

Depois faça exercícios usando apenas arrays.

Projeto:

Sistema de biblioteca.

---

# Fase 5 — Strings (Semana 5)

Métodos:

```js
trim()

split()

replace()

replaceAll()

substring()

slice()

includes()

startsWith()

endsWith()

toUpperCase()

toLowerCase()

repeat()

padStart()

padEnd()
```

Projeto

Formatador de textos.

---

# Fase 6 — Assincronismo (Semana 6)

Essa fase muda completamente sua visão do JS.

Aprenda:

Call Stack

Event Loop

Microtasks

Macrotasks

setTimeout

setInterval

Promises

```js
new Promise()
```

---

Async Await

```js
async

await
```

---

Fetch API

---

Projeto

Consumir uma API pública.

---

# Fase 7 — DOM (Semana 7)

Seletores

```js
querySelector()

querySelectorAll()
```

---

Eventos

```js
click

input

submit

keydown
```

---

Manipulação

```js
createElement()

appendChild()

remove()

classList

dataset
```

Projeto

Todo List completa.

---

# Fase 8 — Módulos (Semana 8)

Aprenda:

```js
export

import

default export
```

---

Organização

---

ES Modules

---

Projeto

Separar aplicação em módulos.

---

# Fase 9 — Backend (Semana 9)

Node.js

Aprenda:

Filesystem

```js
fs
```

---

Path

---

HTTP

---

NPM

---

Package.json

---

Projeto

Servidor HTTP.

---

# Fase 10 — Express (Semana 10)

Rotas

Middleware

Controllers

Services

CRUD

JSON

Status HTTP

Projeto

API de tarefas.

---

# Fase 11 — Banco de Dados (Semana 11)

Aprenda:

SQL

PostgreSQL

SQLite

ORM

Prisma

CRUD completo.

Projeto

Sistema de estoque.

---

# Fase 12 — Projeto Final

Monte uma aplicação completa.

Frontend

* HTML
* CSS
* JavaScript

Backend

* Node.js
* Express

Banco

* PostgreSQL

Funcionalidades

* Login
* Cadastro
* CRUD
* Autenticação
* Paginação
* Pesquisa
* Upload
* Consumo de API

---

# Assuntos Avançados (Essenciais)

Depois do básico, estude estes temas em profundidade:

## Escopo

* Global
* Local
* Léxico

---

## Hoisting

Entenda exatamente:

* Funções
* Variáveis
* Classes

---

## Closures

Um dos tópicos mais cobrados em entrevistas.

---

## This

Saiba o comportamento em:

* Objetos
* Arrow Functions
* Classes
* Eventos
* Callbacks

---

## Prototype

Entenda:

* `__proto__`
* `prototype`
* Prototype Chain

---

## Event Loop

Estude:

* Call Stack
* Web APIs
* Callback Queue
* Microtask Queue

---

## Memória

Garbage Collector

Stack

Heap

Referência vs Valor

---

## Desestruturação

```js
const { nome } = pessoa;

const [a, b] = numeros;
```

---

## Operadores modernos

```js
??

?.

...
```

---

## JSON

```js
JSON.parse()

JSON.stringify()
```

---

# Projetos para consolidar

Ao longo dos estudos, faça projetos como:

* Calculadora
* Relógio Digital
* Cronômetro
* Jogo da Velha
* Jogo da Forca
* Todo List
* Kanban
* Gerenciador Financeiro
* Sistema de Biblioteca
* API REST
* Chat em tempo real (WebSocket)
* Clone do Trello
* Clone básico do Discord
* Dashboard Administrativo

---

# Recursos gratuitos

* [MDN Web Docs (JavaScript)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript?utm_source=chatgpt.com) — A referência mais completa da linguagem.
* [javascript.info](https://javascript.info?utm_source=chatgpt.com) — Excelente para aprender desde o básico até conceitos avançados.
* [Node.js](https://nodejs.org?utm_source=chatgpt.com) — Documentação oficial do ambiente de execução.
* [Express](https://expressjs.com?utm_source=chatgpt.com) — Framework para criação de APIs.
* [MDN - DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model?utm_source=chatgpt.com) — Manipulação da interface e eventos.

---