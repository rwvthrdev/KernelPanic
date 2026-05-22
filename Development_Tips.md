# Dicas

Aqui conterão dicas que ajudam a moldar uma mentalidade mais profissional adiquirindo conhecimento de pequenos macetes que fazem a total diferença no desenvolvimento.

![Dicas](/imgs/TipsLogo.jpg)

## 👾 VSCode Tips

<details>
<summary>💻 Web Devevlopment Extensions</summary>

<br>

Aqui estão algumas extensões que eu uso e também recomendo para usar dentro do VsCode para melhorar a sua performance.

- Platzi Theme. Author: Codevars. 

    - Tema azul marinho bem escuro com contraste em verde limão, a cor das letras tem bastante contraste e sinceramente faz muito bem pra minha vista, até agora foi o melhor que achei.

- Bearded Theme

    - Vários temas com variantes interessantes de cores, também é um tema muito bom, a maioria das letras apresentam um contraste muito bom com o fundo.

- Dracula Theme 

    - Não gosto muito do esquema de cores mas tem um contraste muito bom entre letras e fundo, muito bom pra quem programa em ambiente escuro.

- Bearded Icons

    - Atualmente estou usando esse tema para os ícones das minhas pastas, tem uma variação bem legal e é bem acabado, muito bom vale bastante a pena.

- JetBrains Icon Theme

    - Melhor pra quem programava usando alguma IDE do JetBrains, icnones minimalistas e estilizados, na minha colocação fica em segundo lugar no ranking

- Auto Rename Tag, Auto Cole Tag, Auto Complete Tag

    - Muito bom para HTML. Resumidamente ele fecha, renomeia e completa as tags automaticamente, reduzindo o tempo e aumentando a eficiencia e produtividade.


</details>

## ⚙️ Geral Development Tips

### 📄 Branches

Prefixos de nomeação, ajudam a organizar e entender o que está acontecendo naquela branch, facilitano o trabalho e melhorando o desempenho em projetos maiores e mais complicados.

#### 🔧 Prefixos e suas funções

| Prefixo | Uso | Exemplo |
|---|---|---|
| feature/ | Nova funcionalidade no sistema | feature/tela-de-cadastro |
| fix/ | Correção de bug sem urgência | fix/validacao-email |
| hotfix/ | Correção de erro crítico, exige urgência | hotfix/crash-na-tela-inicial |
| realese/ | Preparação e teste de nova versão antes da produção | realese/v1.5.0 |
| chore/ | Manutenção técnica, atualizar pacotes e configurações sem impacto ao usuário | chore/atualizar-webpack |
| refactor/ | Melhoria no código existente sem alterar o que ele faz | refactor/limpar-funcao-carrinho |
| docs/ | Adicionar ou atualizar a documentação do projeto | docs/instrucoes-api |
| test/ | Adicionar ou ajustar testes automatizados | test/login-unitario |

#### ♻️ Boas práticas para criação de novas branches

- Use sempre letras minúsculas e hífen (kebab-case): Nunca use espaços, acentos letras maiúsculas (CamelCase) ou underline (_). O padrão de mercado é separar palavras por traço.

    - ❌ feature/Minha Nova Tela
    - ❌ feature/minha_nova_tela
    - ✅ feature/minha-nova-tela

- Seja simples mais objetivo e claro: O nome da branche deve especificar a alteração.

    - ❌ fix/botao (qual botão? qual tela?)
    - ✅ fix/botao-voltar-perfil

- Use o número da tarefa: Caso você use Jira, Trello ou Github Issues, é uma excelente prática colocar o ID da tarefa logo após o prefixo. Isso cria um link automático na maioria dos sistemas.

    - ✅ feature/TRELLO-200-login-google

- Mantenha a branch focada em apenas uma coisa: Se você está fazendo a feature/tela-de-login e percebe um erro na documentação. Termine sua feature, e abra uma nova branch docs/corrigir-readme. Misturar assuntos dá dor de cabeça na hora de revisar o código.

- Branchs têm prazo de validade: Não fique semanas trabalhando em uma mesma branch isolada. O ideal é que as tarefas sejam pequenas o suficiente para a branch ser criada, ter o código finalizado, ser aprovada e excluida em questão de dias.

- Delete a branch após o Merge: Depois que sua feature/ ou fix/ for unida (merged) com a develop ou main, apague a branch temporária do servidor. Isso mantém o reporisitório limpo.

## ... Fazendo :) ⬇️