FROM node:lts-slim as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN apt-get update || : && apt-get install python -y

RUN npm install -g gatsby-cli
RUN yarn install

COPY . ./
RUN yarn build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/public /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]