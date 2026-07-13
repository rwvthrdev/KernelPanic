
---

# Fase 1 — Fundamentos (Semana 1)

Objetivo:

> Aprender a sintaxe do TypeScript.

## Dia 1

* O que é TypeScript
* Como ele funciona
* Compilação
* tsconfig.json

Aprenda:

```ts
let nome: string = "Matheus"

let idade: number = 18

let ativo: boolean = true
```

---

## Dia 2

Tipos primitivos

```ts
string

number

boolean

null

undefined

symbol

bigint
```

---

## Dia 3

Arrays

```ts
let nomes: string[] = []

let numeros: number[] = []

let misto: (string | number)[]
```

---

## Dia 4

Tuplas

```ts
let usuario: [string, number]

usuario = ["Matheus", 18]
```

---

## Dia 5

Objetos

```ts
let pessoa: {
    nome: string
    idade: number
}
```

---

## Dia 6

Readonly

Optional

```ts
type Pessoa = {
    nome: string
    idade?: number
    readonly cpf: string
}
```

---

## Dia 7

Exercícios.

Faça uma agenda de contatos.

---

# Fase 2 — Funções (Semana 2)

Aprenda tudo sobre funções.

```ts
function soma(a: number, b: number): number {
    return a + b
}
```

Depois:

Parâmetros opcionais

```ts
function ola(nome?: string)
```

---

Valores padrão

```ts
function ola(nome = "Visitante")
```

---

Rest

```ts
function soma(...nums: number[])
```

---

Arrow Functions

```ts
const soma = (a:number,b:number):number => a+b
```

---

Sobrecarga

```ts
function formatar(valor: string): string

function formatar(valor: number): string
```

---

Projeto:

Calculadora.

---

# Fase 3 — Tipos Avançados (Semana 3)

Agora começa o TypeScript de verdade.

Aprenda:

## Union Types

```ts
string | number
```

---

Literal Types

```ts
"admin"

"user"

"guest"
```

---

Aliases

```ts
type Usuario = {

}
```

---

Interfaces

```ts
interface Usuario {

}
```

---

Diferença entre

interface

type

---

Intersection

```ts
Pessoa & Endereco
```

---

Never

Unknown

Any

Void

---

Projeto

Sistema de cadastro.

---

# Fase 4 — Orientação a Objetos (Semana 4)

Classes

```ts
class Pessoa {

}
```

---

Constructor

---

public

private

protected

readonly

---

Herança

---

Polimorfismo

---

Abstract

---

Implements

---

Projeto

Sistema bancário.

---

# Fase 5 — Generics (Semana 5)

Essa é uma das partes mais importantes.

```ts
function identidade<T>(valor:T):T{

}
```

Depois:

Generics em arrays

Generics em funções

Generics em interfaces

Generics em classes

Constraints

```ts
<T extends Pessoa>
```

Projeto

CRUD genérico.

---

# Fase 6 — TypeScript Profissional (Semana 6)

Aprenda:

Enums

Namespaces (entenda, mas saiba que hoje são pouco usados)

Modules

Imports

Exports

Declaration Files

```ts
.d.ts
```

Modules Resolution

---

Projeto

API completa.

---

# Fase 7 — Backend (Semana 7)

Agora entra Node.

Faça uma API usando:

```
Node

Express

TypeScript
```

Aprenda:

Request

Response

Middlewares

Rotas

Controllers

Services

Repositories

DTO

Validação

Erros

---

Projeto

API de Biblioteca

```
Livro

Autor

Usuário

Empréstimo
```

---

# Fase 8 — Front-end (Semana 8)

Agora React.

Aprenda:

React + TS

Props

State

Hooks

Eventos

Refs

Context

Custom Hooks

Componentes Genéricos

---

Projeto

Todo App

---

Depois

Dashboard

---

# Fase 9 — Ecossistema (Semana 9)

Aprenda ferramentas que quase todo projeto usa:

```
Zod

Prisma

Drizzle

Axios

React Query (TanStack Query)

React Hook Form

Vitest

Jest

ESLint

Prettier
```

Projeto

Sistema completo consumindo sua API.

---

# Fase 10 — Projeto Final (Semana 10)

Monte um projeto parecido com o de uma empresa.

Exemplo:

```
Frontend

React

TypeScript

Tailwind

React Query

Zod

Shadcn/UI

Backend

Node

Express

TypeScript

Prisma

PostgreSQL

JWT

Docker

Deploy
```

Esse projeto deve incluir:

* Login e autenticação
* Cadastro de usuários
* CRUD completo
* Paginação
* Pesquisa
* Upload de imagens
* Validação de dados
* Tratamento de erros
* Testes básicos
* Deploy

---

# Exercícios diários

A cada novo assunto, faça pequenos desafios antes de partir para projetos maiores:

* Tipar funções.
* Tipar objetos complexos.
* Criar interfaces.
* Converter códigos JavaScript antigos para TypeScript.
* Resolver exercícios do Beecrowd/LeetCode usando TypeScript.

---

# Recursos gratuitos

* [TypeScript Handbook (documentação oficial)](https://www.typescriptlang.org/docs/?utm_source=chatgpt.com) — O melhor material para entender a linguagem.
* [TypeScript Playground](https://www.typescriptlang.org/play?utm_source=chatgpt.com) — Teste código sem instalar nada.
* [Node.js](https://nodejs.org?utm_source=chatgpt.com) — Ambiente de execução para o backend.
* [Express](https://expressjs.com?utm_source=chatgpt.com) — Framework minimalista para APIs.
* [React](https://react.dev?utm_source=chatgpt.com) — Biblioteca para interfaces.
* [NestJS](https://nestjs.com?utm_source=chatgpt.com) — Framework backend em TypeScript muito usado em empresas.

---