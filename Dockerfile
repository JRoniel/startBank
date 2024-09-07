# Use a imagem oficial do Node.js como base
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie o restante da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta que a aplicação usará
EXPOSE 3000

# Defina o comando para iniciar a aplicação
CMD ["npm", "start"]
