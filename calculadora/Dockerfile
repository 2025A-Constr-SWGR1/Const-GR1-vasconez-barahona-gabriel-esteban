# Usa una imagen oficial de Node.js
FROM node:22.14.0
# Establece el directorio de trabajo
WORKDIR /usr/src/app
# Copia los archivos de dependencias primero
COPY package*.json ./
# Instala las dependencias
RUN npm install
# Copia el resto del código
COPY . .
# Construye el proyecto
RUN npm run build
# Expone el puerto del servidor Nest.js (por defecto 3000)
EXPOSE 3000
# Comando por defecto para iniciar la app
CMD ["node", "dist/main"]
