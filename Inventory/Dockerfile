FROM node:18.14.2

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV URI mongodb+srv://Samson:myPASSWORD007@cluster0.kbqbowv.mongodb.net/Lampnent_exercise_InventoryDB?retryWrites=true&w=majority

ENV PRODUCT_COMM_API = http://localhost:4000/product/api/communication

ENV SUPPLIER_COMM_API = http://localhost:4000/supplier/api/communication

EXPOSE 4002

CMD ["npm", "start"]