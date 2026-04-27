# Dice Roller — Vercel

Rolador de dados simples rodando com Vercel Functions (backend serverless) e HTML puro (frontend estático).

## Como rodar localmente

```bash
# 1. Instale a CLI da Vercel (só precisa fazer uma vez)
npm install -g vercel

# 2. Entre na pasta do projeto
cd dice-roller-vercel

# 3. Inicie o servidor de desenvolvimento
vercel dev
```

Abra http://localhost:3000 no navegador.

## Como fazer deploy na Vercel

```bash
# Deploy de preview
vercel

# Deploy em produção
vercel --prod
```

Na primeira vez a CLI vai perguntar sobre seu projeto (nome, escopo). Aceite os padrões.

## Estrutura do projeto

```
dice-roller-vercel/
├── api/
│   └── roll.js       # Vercel Function — recebe ?sides=N e retorna o resultado do dado
├── public/
│   └── index.html    # Frontend — página com o formulário e o resultado
├── package.json      # Metadados do projeto e script "dev"
├── vercel.json       # Configuração de roteamento da Vercel
└── README.md         # Este arquivo
```

## Como a API funciona

**Endpoint:** `GET /api/roll?sides=6`

**Resposta de sucesso (200):**
```json
{
  "sides": 6,
  "value": 4,
  "message": "Você rolou um d6 e tirou 4!"
}
```

**Resposta de erro (400):**
```json
{
  "error": "O número de lados deve ser entre 2 e 100."
}
```
