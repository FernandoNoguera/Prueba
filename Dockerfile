# Usamos una imagen base de Node.js con la versión que necesitas
FROM node:16.13.0

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el archivo package.json y yarn.lock al directorio de trabajo
COPY package.json yarn.lock ./

# Instalamos las dependencias
RUN yarn install

# Copiamos el resto de los archivos del proyecto al contenedor
COPY . .

# Construimos la aplicación Next.js
RUN yarn build

# Exponemos el puerto en el que funciona la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación en modo de desarrollo
CMD ["yarn", "dev"]
