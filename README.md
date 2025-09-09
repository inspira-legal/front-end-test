# Front-End Test

Um projeto React moderno construído with as mais recentes tecnologias de desenvolvimento front-end.

## 🛠 Tecnologias Utilizadas

- **⚡ Vite** - Ferramenta de build rápida e servidor de desenvolvimento
- **⚛️ React 19** - Biblioteca de interface de usuário with recursos mais recentes
- **📘 TypeScript** - Superset do JavaScript with tipagem estática
- **🎨 Tailwind CSS** - Framework CSS utility-first
- **🚀 GraphQL** - Cliente Apollo para consultas de dados
- **🐻 Zustand** - Gerenciamento de estado leve
- **🧪 Vitest** - Framework de testes unitários rápido

## 🚀 Como Iniciar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd front-end-test
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```
Edite o arquivo `.env` e adicione seu token do GitHub se necessário.

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

5. Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter ESLint
- `npm run test` - Executa os testes em modo watch
- `npm run test:run` - Executa os testes uma única vez
- `npm run test:ui` - Abre a interface do Vitest

## 🏗 Estrutura do Projeto

```
src/
├── components/     # Componentes React reutilizáveis
├── hooks/         # Custom React hooks
├── services/      # Configurações de API e GraphQL
├── stores/        # Estados globais with Zustand
├── test/          # Arquivos de teste
└── ...
```

## 🎯 Funcionalidades

- **Busca de usuários do GitHub** - Demonstra integração with API GraphQL
- **Gerenciamento de estado** - Usando Zustand para estado global
- **Interface responsiva** - Construída with Tailwind CSS
- **Tipagem completa** - TypeScript em todo o projeto
- **Testes unitários** - Cobertura with Vitest e Testing Library

## 🧪 Testando

Para executar os testes:

```bash
# Modo watch (recomendado durante desenvolvimento)
npm run test

# Execução única
npm run test:run

# Interface visual dos testes
npm run test:ui
```

## 🔧 Configuração

### GraphQL

O projeto está configurado para usar a API pública do GitHub. Para funcionalidades que requerem autenticação, adicione um token do GitHub no arquivo `.env`:

```
VITE_GITHUB_TOKEN=seu_token_aqui
```

### Tailwind CSS

As configurações do Tailwind estão em `tailwind.config.js`. Plugins adicionais como `@tailwindcss/forms` e `@tailwindcss/typography` já estão incluídos.

### Vitest

A configuração de testes está no `vite.config.ts`. O setup inclui:
- jsdom para testes de DOM
- @testing-library para utilities de teste
- Configuração automática de mocks

## 📈 Build para Produção

Para criar uma build otimizada:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.
