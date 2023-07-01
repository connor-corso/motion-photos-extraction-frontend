# FROM node:20-alpine as build

# WORKDIR /app

# COPY package*.json /app/

# RUN npm install

# COPY ./ /app/

# RUN npm run build

# FROM nginx:1.25-alpine

# COPY --from=build /app/build /usr/share/nginx/html
# COPY --from=build /app/nginx/nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80

# ENTRYPOINT [ "nginx", "-g", "daemon off;" ]


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