# AliceBot

## Chat Bot for Telegram

[![](https://img.shields.io/badge/Telegram-@aliceevilloficialbot-blue)](https://t.me/aliceevilloficialbot)
[![](https://img.shields.io/badge/Canal-@canal_da_alice-1b2069)](https://t.me/aliceevillcanal)
[![](https://img.shields.io/badge/Suporte-@lbrabo-1b2069)](https://t.me/lbrabo)

Alice envia mensagem, que são aprendidas a partir das mensagem envidas no chat... envia áudios, fotos e stickers...

### Pré-requisitos

Você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://cloud.mongodb.com/)

### 🤖 Deploy na Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project)

### 🤖 Rodando o bot localmente

```bash
# Clone este repositório
$ git clone https://github.com/joaojunior321/alicebot.git

# Acesse a pasta do projeto no terminal/cmd
$ cd alicebot

# Instale as dependências

# Usando o NPM:
$ npm i

# Variáveis ambientes

# Crie um arquivo com .env com qualquer editor de texto e coloque:
DB_STRING=#URL de conexão com o MongoDB (database: alice)
TELEGRAM_API=#Token do seu bot gerado no @BotFather
BOT_NAME=Alice
BOT_USERNAME=aliceevilloficialbot
groupId=#ID DO GRUPO TELEGRAM
DEV_USERS=#ID_DEV // userId1,userId2,userId3

# Execute a aplicação
$ npm start

```

### Deploy na Vercel (Webhook)

1. Faça push para o GitHub
2. Importe o projeto na Vercel
3. Configure as variáveis de ambiente na Vercel
4. A Vercel vai usar o `api/webhook.js` como endpoint
5. Configure o webhook do Telegram apontando para `https://seu-dominio.vercel.app/api/webhook`

### Baseado no Chester bot

- [Chesterbot](https://github.com/Rev3rs1d/chesterbot)

## Pronto, o bot já estará rodando
