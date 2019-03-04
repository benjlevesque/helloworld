FROM node:11-slim

WORKDIR /app
COPY package.json .
RUN npm i
COPY index.js .

CMD ["node", "index.js"]
