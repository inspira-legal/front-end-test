# Desafio Técnico: E-commerce de Produtos

Bem-vindo ao desafio técnico! Este repositório foi criado para avaliar suas habilidades em desenvolvimento web front-end. Você receberá uma base de projeto com tecnologias pré-configuradas e terá como objetivo completar as funcionalidades descritas abaixo.

---

## Como Começar

1.  **Clone o repositório:** Baixe este repositório para sua máquina local.
2.  **Abra o projeto:** Navegue até a pasta do projeto e use seu editor de código preferido.
3.  **Instale as dependências:** Execute `npm install` ou `yarn` no terminal.
4.  **Inicie o projeto:** Execute `npm run dev` ou `yarn dev` para iniciar o servidor de desenvolvimento.

O projeto já contém uma estrutura básica para que você possa focar diretamente nas implementações.

---

## Design e Prototipagem

O design do projeto pode ser consultado no Figma. Ele serve como referência visual para o layout e funcionalidades.

-   **Arquivo Figma:** https://www.figma.com/design/Znt8MmDKaAR2mgA1RsNgby/Test-products-list?node-id=0-1&t=1s4oOzXhnJNQ5h5d-1
-   **Protótipo Navegável:** https://change-matter-34354477.figma.site/

---

## Funcionalidades a Serem Implementadas

Seu principal objetivo é completar a página inicial, implementando a lista de produtos, os filtros e o carrinho de compras.

### 1. Filtros de Produtos

Implemente os filtros conforme as regras abaixo, garantindo que o estado de cada filtro seja gerenciado com **Zustand**.

-   **Todos:** Mostra todos os produtos.
-   **Novidades:** Mostra apenas produtos com `dateAdded` na última semana.
-   **Em Promoção:** Mostra somente produtos onde `onSale` é `true`.
-   **Categoria:** Permite filtrar produtos pelas categorias definidas: `audio`, `accessories`, `computing`, `gaming`, `wearables`.
-   **Faixa de Preço:** Permite filtrar produtos por um range de preço mínimo e máximo.

### 2. Carrinho de Compras

-   Adicione um botão de "Adicionar ao Carrinho" em cada card de produto.
-   Adicione um botão de "Remover do Carrinho" para itens no carrinho.
-   Exiba um botão de "Carrinho" que, ao ser clicado, mostre uma lista dos itens adicionados, seus valores e o total da compra. O estado do carrinho deve ser gerenciado com **Zustand**.
-   Adicione um botão de "Finalizar Compra" no carrinho. (Não é necessário implementar a funcionalidade, apenas o botão)

---

## Avaliação

Sua solução será avaliada com base nos seguintes critérios:

-   **Raciocínio e Arquitetura:** Suas escolhas na construção e priorização das funcionalidades.
-   **Uso de Tecnologias:** Sua capacidade de aplicar corretamente as ferramentas propostas:
    -   **Gerenciamento de Estado:** Uso eficiente do **Zustand** para o carrinho e os filtros.
    -   **Testes:** Qualidade e cobertura dos testes com **Vitest**.
    -   **Manipulação de Dados:** Compreensão e uso do fluxo de dados com o mock de **GraphQL**.
    -   **Estilização:** Aplicação do **Tailwind CSS** para um layout limpo e responsivo.
-   **Qualidade do Código:** Nível de abstração, organização e legibilidade.

### Observação

Você está liberado para usar ferramentas de IA. A avaliação não é sobre a quantidade de código escrito, mas sobre as escolhas de arquitetura, a compreensão da lógica por trás das soluções e a capacidade de explicar o que foi feito.

Boa sorte!

---

# Front-End Interview Skeleton

Estrutura mínima pronta para entrevistas: sem funcionalidades implementadas, mas com GraphQL, TypeScript, Vitest e Zustand configurados.

## 🛠 Stack

- ⚛️ React + TypeScript (Vite)
- 🚀 GraphQL (Apollo Client)
- 🐻 Zustand
- 🧪 Vitest + Testing Library

## 🚀 Como Iniciar

Pré-requisitos:
- Node.js 20.19.0+
- npm ou yarn

Passos:
1. Instalar dependências: `npm install`
2. Duplicar env: `cp .env.example .env`
3. Rodar em dev: `npm run dev`

Abra `http://localhost:5173`.

## 📜 Scripts

- `dev`: servidor de desenvolvimento
- `build`: build de produção
- `preview`: preview do build
- `lint`: ESLint
- `test`, `test:run`, `test:ui`: testes com Vitest

## 🏗 Estrutura

```
src/
├── services/      # Configuração do Apollo Client
├── stores/        # Estados globais (Zustand)
├── test/          # Testes e setup
└── App.tsx        # Tela inicial (placeholder)
```

## 🔧 Configuração

- GraphQL: configure a URL em `VITE_GRAPHQL_URI` no `.env`.
- Zustand: `src/stores/appStore.ts` exporta um store vazio para iniciar.
- Testes: Vitest configurado em `vite.config.ts` com `jsdom` e setup Testing Library.

Este repositório é apenas a base. Adicione componentes, queries, stores e testes conforme o desafio da entrevista.
