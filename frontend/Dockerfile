FROM node:20

WORKDIR /app

# Crear proyecto React si no existe
RUN if [ ! -f package.json ]; then \
      npx create-react-app .; \
    fi

# Instalar dependencias
RUN npm install

# Construir app
RUN npm run build

# Servir la app
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
