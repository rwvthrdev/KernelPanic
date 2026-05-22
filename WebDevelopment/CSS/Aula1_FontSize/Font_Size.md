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

**px** (Pixels): É uma unidade absoluta. 16px sempre será 16px na tela. É fácil de entender, mas ruim para acessibilidade (se o usuário der zoom no navegador, às vezes)
 
