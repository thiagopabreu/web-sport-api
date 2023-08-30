# Use uma imagem base Node.js com a versão desejada
FROM node:alpine3.18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e o arquivo package-lock.json (ou yarn.lock) para o diretório de trabalho
COPY . .

# Instale as dependências do projeto
RUN npm install

# Build the React app
RUN npm run build

# Defina o comando para iniciar o servidor Next.js
CMD ["npm", "start"]
