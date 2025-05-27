# Usar una imagen oficial de Node.js como base
FROM node:20

# Crear un directorio dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto que usa la app
EXPOSE 3000

# Comando para iniciar la app
CMD ["node", "app.js"]