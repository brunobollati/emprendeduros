FROM node:18-alpine

# Crear directorio de la app
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto
EXPOSE 3000

# Iniciar el servidor
CMD ["node", "server.js"]
