FROM node:18.14.2

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV URI mongodb+srv://Samson:myPASSWORD007@cluster0.kbqbowv.mongodb.net/Lampnent_exercise_products?retryWrites=true&w=majority

EXPOSE 4001

CMD ["npm", "start"]