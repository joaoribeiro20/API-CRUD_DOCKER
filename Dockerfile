# Use a imagem Node.js 14 como base
FROM node:alpine

# Crie e defina o diretório de trabalho no contêiner
WORKDIR /usr/src/main

# Copie os arquivos de dependência e configuração do projeto para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie os arquivos de código fonte do projeto para o diretório de trabalho
COPY . .

# Exponha a porta em que o aplicativo Express está rodando
EXPOSE 8088

# Comando para iniciar o aplicativo quando o contêiner for iniciado
CMD ["npm", "run", "dev"]
