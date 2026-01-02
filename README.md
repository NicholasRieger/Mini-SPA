# Mini SPA (Vanilla JS) — Navegação sem recarregar com Fetch

Projeto simples em **JavaScript puro** que simula uma navegação estilo **SPA**:
ao clicar em links `<a>`, a navegação padrão é interceptada, o HTML do `href` é carregado via **fetch** e o conteúdo é renderizado dentro de um container `.resultado` — sem recarregar a página.

## ✅ O que eu pratiquei aqui
- Delegação de eventos (listener único no `document`)
- Interceptação de cliques em `<a>` com `preventDefault()`
- Requisições com `fetch()`
- Validação de status HTTP com `response.ok`
- Leitura do corpo com `response.text()`
- `async/await` com `try/catch` para tratamento de erros
- Renderização dinâmica com `innerHTML`

## 🧠 Como funciona (fluxo)
1. Usuário clica em um link `<a href="...">`
2. O script intercepta o clique e impede o redirecionamento
3. O `fetch(href)` busca o HTML da página
4. Se `response.ok` for false, um erro é lançado
5. O HTML é injetado dentro de `.resultado`

## 📁 Estrutura sugerida

mini-spa/
index.html
script.js
pagina1.html
pagina2.html
pagina3.html
README.md


## ▶️ Como rodar
Como o projeto usa `fetch()` para carregar arquivos locais, é recomendado usar um servidor local.

### Opção 1: VS Code + Live Server
1. Instale a extensão **Live Server**
2. Abra o `index.html`
3. Clique em **Open with Live Server**
4. Clique nos links e veja o conteúdo mudar sem recarregar


## 📸 Preview
> Dica: coloque aqui um GIF ou print do projeto rodando (clicando e trocando a área `.resultado`).
