
# 🟢 Node.js

## O que é?

O **Node.js** é um ambiente que permite executar JavaScript fora do navegador.

Antes dele, JavaScript só funcionava em páginas web.

Por exemplo:

Quando você abre um site:

```text
Chrome
   ↓
JavaScript
```

Quem executa o código é o navegador.

Mas e se você quiser criar o servidor que envia as fotos do Instagram?

O navegador não faz isso.

Você precisa de um programa rodando no servidor.

É aí que entra o Node.

```text
Servidor
   ↓
Node.js
   ↓
JavaScript
```

Agora seu JavaScript consegue:

* Ler arquivos
* Criar servidores
* Acessar banco de dados
* Enviar emails
* Fazer upload de imagens
* Criar APIs

Sem Node:

```text
JavaScript
↓

Botões

Animações

DOM

Eventos
```

Com Node:

```text
JavaScript
↓

Servidor

API

Banco

Autenticação

Upload

Arquivos
```

**Node é como um motor que permite rodar JavaScript no servidor.**

---

# 🚂 Express

Agora imagine criar um servidor usando apenas Node.

Você teria que escrever centenas de linhas só para responder uma requisição.

Express resolve isso.

Ele é um **framework** para Node.

Pense nele como uma caixa de ferramentas.

Sem Express:

```text
Node

↓

Criar servidor

↓

Criar rotas

↓

Ler URL

↓

Ler método HTTP

↓

Enviar resposta

↓

Tratar erros

↓

Etc...
```

Muito trabalho.

Com Express:

```javascript
app.get("/usuarios", (req, res) => {

});
```

Pronto.

Você já criou uma rota.

Express faz quase todo o trabalho pesado.

---

Ele também possui:

Middleware

```text
↓

Verificar Login

↓

Verificar Token

↓

Verificar Permissões

↓

Executar rota
```

Também facilita:

* Upload
* Cookies
* JWT
* API REST
* Organização

Express é praticamente o padrão para criar APIs com Node.

---

# 🐘 PostgreSQL

Imagine que você criou o Instagram.

Agora alguém cria uma conta.

Onde essa conta fica salva?

Na memória?

Não.

Quando desligar o servidor ela desaparece.

Você precisa de um banco de dados.

É isso que o PostgreSQL faz.

Ele salva informações.

Exemplo:

Tabela usuários

| id | nome    | email   |
| -- | ------- | ------- |
| 1  | Matheus | m@email |

Tabela posts

| id | usuario | foto      |
| -- | ------- | --------- |
| 1  | 1       | praia.jpg |

Tabela comentários

| id | post | texto |
| -- | ---- | ----- |

Tudo organizado.

---

PostgreSQL entende SQL.

Exemplo:

```sql
SELECT * FROM usuarios;
```

Ou

```sql
INSERT INTO usuarios (...)
```

É um dos bancos mais usados no mundo.

---

# 🔷 Prisma

Agora imagine escrever SQL toda hora.

Você faria isso:

```sql
SELECT *

FROM usuarios

WHERE id = 10;
```

Depois:

```sql
UPDATE usuarios

SET nome='Matheus'

WHERE id=10;
```

Depois:

```sql
DELETE
```

Isso fica enorme.

Prisma resolve isso.

Ele transforma SQL em JavaScript/TypeScript.

Você escreve:

```ts
await prisma.usuario.findUnique();
```

E ele gera:

```sql
SELECT ...
```

automaticamente.

---

Além disso ele:

✔ cria tabelas

✔ cria migrations

✔ cria relacionamentos

✔ gera tipos

✔ autocomplete

É uma ORM.

---

# ⚛ React

Agora vamos para o Front-end.

Imagine construir o Instagram apenas usando:

HTML

CSS

JavaScript

Você teria milhares de linhas.

Tudo misturado.

React muda completamente isso.

Ele trabalha com COMPONENTES.

Por exemplo.

Você cria:

```text
Botão
```

Depois reutiliza.

```text
Botão

Botão

Botão

Botão
```

Mesmo código.

Outro exemplo.

Você cria um componente chamado Post.

```text
Post

↓

Foto

↓

Curtidas

↓

Comentários
```

Depois faz:

```text
<Post/>

<Post/>

<Post/>

<Post/>
```

O React monta tudo.

---

Outra vantagem.

Quando uma curtida muda...

Sem React.

A página inteira pode precisar ser manipulada.

Com React.

Só aquele componente atualiza.

Muito mais eficiente.

---

# ▲ Next.js

Agora imagine um projeto React enorme.

Você precisa:

Rotas

Login

SEO

Renderização no servidor

Upload

Otimização

Configuração

React sozinho não faz tudo isso.

Next faz.

Ele é um framework baseado em React.

React é só a biblioteca.

Next entrega:

✔ sistema de páginas

✔ roteamento automático

✔ renderização no servidor (SSR)

✔ geração de páginas estáticas (SSG)

✔ otimização de imagens

✔ API Routes

✔ Server Components

✔ cache

✔ deploy facilitado

Por isso muitas empresas escolhem Next para aplicações web.

---

# 🐳 Docker

Agora imagine isso.

Seu projeto funciona perfeitamente.

Mas você manda para um amigo.

Ele tenta executar.

Erro.

Você usa:

Node 22

Ele usa:

Node 18

Você usa:

PostgreSQL 17

Ele usa:

16

Você usa:

Linux

Ele:

Windows

Tudo quebra.

Docker resolve isso.

Ele cria um ambiente isolado.

Chamado:

Container.

Dentro dele você coloca:

```text
Node

Express

PostgreSQL

Prisma

Dependências

Sistema
```

Tudo.

Depois qualquer pessoa executa:

```bash
docker compose up
```

E pronto.

Tudo funciona igual ao seu computador.

É por isso que Docker é tão valorizado em equipes: ele elimina o clássico problema de **"na minha máquina funciona"**.

---

# Como todas essas tecnologias trabalham juntas

Imagine novamente o Instagram.

Quando um usuário abre o aplicativo:

```text
Usuário
     │
     ▼
React / Next.js
(Interface)
     │
     ▼
Requisição HTTP
(GET /posts)
     │
     ▼
Express
(Rota da API)
     │
     ▼
Node.js
(Executa a lógica)
     │
     ▼
Prisma
(Traduz a consulta)
     │
     ▼
PostgreSQL
(Busca os dados)
     │
     ▼
Prisma
(Converte os resultados)
     │
     ▼
Node.js
     │
     ▼
Express
(Envia JSON)
     │
     ▼
React
(Atualiza a tela)
```

E o **Docker** fica "em volta" de tudo isso, garantindo que todos esses componentes rodem exatamente da mesma forma em qualquer ambiente (desenvolvimento, testes ou produção).

## Resumindo em uma frase

* **Node.js** → Executa JavaScript no servidor.
* **Express** → Facilita a criação de APIs e servidores com Node.
* **PostgreSQL** → Armazena os dados da aplicação.
* **Prisma** → Permite acessar o banco usando JavaScript/TypeScript em vez de SQL puro.
* **React** → Cria a interface da aplicação de forma baseada em componentes.
* **Next.js** → Adiciona estrutura e recursos avançados ao React para aplicações modernas.
* **Docker** → Empacota toda a aplicação para que ela funcione de forma consistente em qualquer máquina.