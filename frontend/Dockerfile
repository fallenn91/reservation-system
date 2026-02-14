# frontend/Dockerfile
FROM node:20

WORKDIR /app

# Copiar solo package.json y package-lock.json para instalar dependencias primero
COPY package*.json ./

# Instalar dependencias dentro del contenedor
RUN npm install --legacy-peer-deps

# Copiar el resto del código
COPY . .

# Exponer el puerto de Vite
EXPOSE 5173

# Comando para levantar Vite en modo dev y aceptar conexiones externas
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
