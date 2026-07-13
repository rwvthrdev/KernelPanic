# Operadores em JavaScript - Guia Completo

## 📊 Visão Geral dos Operadores

JavaScript possui diversos tipos de operadores que permitem realizar operações com valores, variáveis e expressões.

---

## 1. **Operadores Aritméticos**
Realizam operações matemáticas básicas.

| Operador | Descrição | Exemplo | Resultado |
|----------|-----------|---------|-----------|
| `+` | Adição | `5 + 3` | `8` |
| `-` | Subtração | `10 - 4` | `6` |
| `*` | Multiplicação | `4 * 3` | `12` |
| `/` | Divisão | `15 / 3` | `5` |
| `%` | Módulo (resto) | `10 % 3` | `1` |
| `**` | Exponenciação | `2 ** 3` | `8` |
| `++` | Incremento | `x++` | Soma 1 |
| `--` | Decremento | `x--` | Subtrai 1 |

```javascript
let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

// Incremento/Decremento
let contador = 5;
console.log(contador++); // 5 (depois vira 6)
console.log(++contador); // 7
```

---

## 2. **Operadores de Atribuição**
Atribuem valores a variáveis.

| Operador | Exemplo | Equivalente |
|----------|---------|-------------|
| `=` | `x = 5` | x = 5 |
| `+=` | `x += 3` | x = x + 3 |
| `-=` | `x -= 2` | x = x - 2 |
| `*=` | `x *= 4` | x = x * 4 |
| `/=` | `x /= 2` | x = x / 2 |
| `%=` | `x %= 3` | x = x % 3 |
| `**=` | `x **= 2` | x = x ** 2 |

```javascript
let x = 10;
x += 5;  // x = 15
x -= 3;  // x = 12
x *= 2;  // x = 24
x /= 4;  // x = 6
x %= 5;  // x = 1
```

---

## 3. **Operadores de Comparação**
Comparam valores e retornam booleano (true/false).

| Operador | Descrição | Exemplo | Resultado |
|----------|-----------|---------|-----------|
| `==` | Igual (valor) | `5 == '5'` | `true` |
| `===` | Estritamente igual (valor + tipo) | `5 === '5'` | `false` |
| `!=` | Diferente (valor) | `5 != '5'` | `false` |
| `!==` | Estritamente diferente | `5 !== '5'` | `true` |
| `>` | Maior que | `8 > 5` | `true` |
| `<` | Menor que | `3 < 7` | `true` |
| `>=` | Maior ou igual | `5 >= 5` | `true` |
| `<=` | Menor ou igual | `4 <= 3` | `false` |

```javascript
console.log(5 == '5');   // true (conversão automática)
console.log(5 === '5');  // false (tipos diferentes)
console.log(5 != '5');   // false
console.log(5 !== '5');  // true

console.log(10 > 5);     // true
console.log(10 <= 5);    // false
```

---

## 4. **Operadores Lógicos**
Usados para combinar condições booleanas.

| Operador | Descrição | Exemplo |
|----------|-----------|---------|
| `&&` | E (AND) - verdadeiro se ambos forem true | `true && false` → `false` |
| `\|\|` | OU (OR) - verdadeiro se pelo menos um for true | `true \|\| false` → `true` |
| `!` | NÃO (NOT) - inverte o valor | `!true` → `false` |

```javascript
let idade = 25;
let temCarteira = true;

// AND
console.log(idade >= 18 && temCarteira);  // true

// OR
console.log(idade >= 18 || temCarteira);  // true

// NOT
console.log(!temCarteira);  // false

// Short-circuit evaluation
console.log(0 && 10);  // 0 (falso)
console.log(5 || 0);   // 5 (primeiro verdadeiro)
```

---

## 5. **Operador Ternário (Condicional)**
Forma abreviada do if-else.

```javascript
// Sintaxe: condição ? valorSeVerdadeiro : valorSeFalso

let idade = 20;
let status = idade >= 18 ? 'Maior de idade' : 'Menor de idade';
console.log(status); // "Maior de idade"

// Aninhado
let nota = 85;
let conceito = nota >= 90 ? 'A' : nota >= 80 ? 'B' : 'C';
console.log(conceito); // "B"
```

---

## 6. **Operadores de Tipo**
Verificam o tipo de um valor.

| Operador | Descrição | Exemplo |
|----------|-----------|---------|
| `typeof` | Retorna o tipo do operando | `typeof "texto"` → `"string"` |
| `instanceof` | Verifica se é instância de uma classe | `[] instanceof Array` → `true` |

```javascript
console.log(typeof 42);           // "number"
console.log(typeof "JavaScript"); // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (bug histórico)
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"

// instanceof
console.log([] instanceof Array);    // true
console.log({} instanceof Object);   // true
```

---

## 7. **Operadores Bitwise**
Operam em nível de bits (raramente usados).

| Operador | Descrição | Exemplo |
|----------|-----------|---------|
| `&` | AND | `5 & 1` → `1` |
| `\|` | OR | `5 \| 1` → `5` |
| `^` | XOR | `5 ^ 1` → `4` |
| `~` | NOT | `~5` → `-6` |
| `<<` | Deslocamento esquerda | `5 << 1` → `10` |
| `>>` | Deslocamento direita | `5 >> 1` → `2` |

---

## 8. **Operador de String (Concatenação)**
O operador `+` também concatena strings.

```javascript
let nome = "João";
let sobrenome = "Silva";

console.log(nome + " " + sobrenome); // "João Silva"
console.log("Idade: " + 25);          // "Idade: 25"
console.log("5" + 5);                 // "55" (string)
console.log(5 + "5");                 // "55" (string)
console.log(5 + 5 + "5");            // "105" (primeiro soma, depois concatena)
```

---

## 9. **Operador de Virgula**
Permite executar múltiplas operações em uma única expressão.

```javascript
let a, b, c;
a = 1, b = 2, c = 3;
console.log(a, b, c); // 1 2 3

// Em loops
for (let i = 0, j = 10; i <= j; i++, j--) {
    console.log(i, j);
}
```

---

## 10. **Operador Opcional (?. ) - Optional Chaining**
Acessa propriedades de forma segura.

```javascript
const usuario = {
    nome: "Ana",
    endereco: {
        cidade: "São Paulo"
    }
};

console.log(usuario?.endereco?.cidade);      // "São Paulo"
console.log(usuario?.contato?.email);        // undefined (não dá erro)

// Em arrays
const lista = [];
console.log(lista?.[0]);  // undefined
```

---

## 11. **Operador Nullish Coalescing (??)**
Retorna o operando da direita se o da esquerda for null ou undefined.

```javascript
let nome = null;
let nomeUsuario = nome ?? "Visitante";
console.log(nomeUsuario); // "Visitante"

let idade = 0;
let idadeUsuario = idade ?? 18;
console.log(idadeUsuario); // 0 (porque 0 não é null/undefined)

// Diferença do ||
console.log(0 || 10);  // 10 (considera 0 como falso)
console.log(0 ?? 10);  // 0  (considera 0 como válido)
```

---

## 12. **Precedência e Associatividade**

### Tabela de Precedência (do maior para o menor):

1. `()` - Parênteses
2. `**` - Exponenciação
3. `++`, `--` - Pós-incremento/decremento
4. `!`, `typeof`, `++`, `--` - Pré-incremento/decremento
5. `*`, `/`, `%` - Multiplicação, divisão, módulo
6. `+`, `-` - Adição, subtração
7. `<`, `<=`, `>`, `>=` - Comparações
8. `==`, `===`, `!=`, `!==` - Igualdade
9. `&&` - AND lógico
10. `||` - OR lógico
11. `??` - Nullish coalescing
12. `?:` - Ternário
13. `=` - Atribuição

```javascript
// Exemplo de precedência
let resultado = 10 + 5 * 2;      // 20 (multiplicação primeiro)
let resultado2 = (10 + 5) * 2;   // 30 (parênteses primeiro)

// Aritmética vs Lógica
let x = 5 + 3 > 2 && 4 < 6;     // true (aritmética depois comparação)
```

---

## 13. **Operadores Especiais**

### `delete`
Remove propriedades de objetos.

```javascript
const pessoa = { nome: "Carlos", idade: 30 };
delete pessoa.idade;
console.log(pessoa); // { nome: "Carlos" }
```

### `in`
Verifica se uma propriedade existe no objeto.

```javascript
console.log('nome' in pessoa);  // true
console.log('idade' in pessoa); // false
```

### `void`
Avalia uma expressão e retorna undefined.

```javascript
console.log(void 0);           // undefined
console.log(void (5 + 3));     // undefined
```

---

## 14. **Coerção de Tipos**

JavaScript converte automaticamente tipos em operações.

```javascript
// String + Number = String
console.log("10" + 20);   // "1020"
console.log(20 + "10");   // "2010"

// Number - String = Number (tenta converter)
console.log("10" - 5);    // 5
console.log("10" * "2");  // 20
console.log("10" / "2");  // 5
console.log("abc" - 5);   // NaN (Not a Number)

// Booleano em números
console.log(true + 1);    // 2
console.log(false + 1);   // 1
```

---

## 15. **Boas Práticas**

✅ **Sempre use `===` e `!==`** para evitar coerção indesejada.

```javascript
// ❌ Evite
if (valor == 0) { }

// ✅ Prefira
if (valor === 0) { }
```

✅ **Use `??` em vez de `||`** quando precisar distinguir entre `null/undefined` e valores falsy.

```javascript
// ❌ Pode dar problema com 0, false, ''
let valor = input || "padrão";

// ✅ Mais seguro
let valor = input ?? "padrão";
```

✅ **Use parênteses** para tornar a intenção clara.

```javascript
// ❌ Ambíguo
let resultado = a + b * c;

// ✅ Claro
let resultado = a + (b * c);
```

---

## 📚 Resumo Rápido

| Categoria | Operadores |
|-----------|------------|
| **Aritméticos** | `+`, `-`, `*`, `/`, `%`, `**`, `++`, `--` |
| **Atribuição** | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=` |
| **Comparação** | `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=` |
| **Lógicos** | `&&`, `\|\|`, `!` |
| **Bitwise** | `&`, `\|`, `^`, `~`, `<<`, `>>`, `>>>` |
| **Especiais** | `?:`, `typeof`, `instanceof`, `?.`, `??` |

---

**Dica Final:** Entender operadores é fundamental para escrever código JavaScript eficiente e legível. Pratique cada tipo em diferentes contextos para dominar seu uso! 🚀