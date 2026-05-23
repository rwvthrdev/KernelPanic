# Fontes

No CSS, as propriedades que começam com **font-** alteram a fonte em si (o formato da letra, o tamanho, a espessura). já as propriedades que começam com **text-** alteram o bloco de texto (alinhamento, espaçamento, decoração).

## 1. Font-Family (Família da Fonte)

*Como funciona:* Define qual tipo de letra será usado no elemento. O navegador do usuário tenta carregar a primeira fonte que voce indicar; se ele não tiver essa fonte instalada no computador, ele tenta a segunda, e assim por diante. É por isso que sempre passamos uma lista separada por vírgulas (chamada fallback).

Valores comuns: 

- **Fontes específicas:** Nomes exatos como ```Arial, "Times New Roman"``` (se o nome tiver espaço, use aspas).

- **Fontes genéricas:** Categorias gerais caso nenhuma específica funcione, como  ```sans-serif, serif ou monospace```

**Exemplos:**  

```css
/* Exemplo 1: Tenta Arial, se falhar, tenta Helvetica, se falhar ele usa qualquer uma sans-serif. */

body {
    font-family: Arial, Helvetica, sans-serif;
}

/* Exemplo 2: Visual clássico para artigos. Tenta Georgia primeiro, se falhar, tenta Times New Roman, se falhar tenta qualquer uma serif. */

p {
    font-family: Georgia, "Times New Roman", serif;
}

/* Exemplo 3: Visual de código de computador. */

code {
    font-family: "Courier New", Courier, monospace;
}
```

## 2. Font-Size (Tamanho da Fonte)

*Como funciona:* Altera o tamanho das letras do texto selecionado. É aqui que entender as unidades de medida do CSS é crucial.

**Unidades Detalhadas**

**px** (Pixels): É uma unidade absoluta. 16px sempre será 16px na tela. É fácil de entender, mas ruim para acessibilidade (se o usuário der zoom no navegador, às vezes fontes em px não crescem adequadamente).

**rem** (Root EM): É uma unidade relativa. Ele olha para o tamanho base do documento HTML inteiro (que por padrão nos navegadores é 16px). Portanto 1rem = 16px. É a medida mais recomendada para tamanho de fontes hoje em dia.

**em**: Também relativa, mas olha para o tamanho do elemento pai dele. Se uma div tem fonte 20px, um parágrafo dentro dela com tamanho 2em terá 40px.

**pt** (Pontos): Unidade física, usada principalmente para impressão. 1pt equivale a 1/72 de uma polegada. Muito raramente usada para telas.

Exemplos:

```css
/* Exemplo 1: Tamanho fixo absoluto. */

h1 {
    font-size: 32px;
}

/* Exemplo 2: Tamanho relativo à raiz. Se a base for 16px, isso equivale a 24px (1.5 * 16) */

h2 {
    font-size: 1.5rem;
}

/* Exemplo 3: Tamanho minúsculo, geralmente usado para notas de rodapé impressas. */

footer {
    font-size: 10pt;
}

```

## 3. Font Wheight (Espessura da Fonte)

*Como funciona*: Definese o texto será normal, negrito, ou algo entre os dois. A fonte escolhida precisa suportar o peso especificado.

Dica: Você também pode usar a tag bold em HTML (b) para deixar em negrito.

**Valores comuns**

- Palavras chave: normal (padrão) e bold (negrito).

- Números de 100 a 900: 400 é igual a normal. 700 é igual a bold. 900 é super grosso (black) e 100 super fino (thin).

Exemplos:

```css

``