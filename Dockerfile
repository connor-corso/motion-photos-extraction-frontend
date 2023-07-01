#Stage 1
FROM node:20-alpine as builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent 
RUN npm install -g --silent
COPY . ./
RUN npm run build

#Stage 2
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]