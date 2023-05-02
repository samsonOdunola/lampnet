# Lampnet Backend Assesment

## Tasks:

- 1.A microservices application that breaks down all the core module of a sales inventory management system into microservices.
- 2.A CRUD services on each of the respective micro services
- 3.A RESTFUL API controller implementing only GET/POST requests
- 4.A swagger interface for a API documentation
- 5.An admin profile for teacher and super admin
- 6.A student profile

## Implementation:

- **Stack Used**
- - Expressjs: This was used to write the server code for the various microservices, third part libaries like cors, nodemon e.t. c. were also used
- - Node js: This is the main platformm on which the application is built.
- - Docker: containaerisation.

* - MongoDb: noSQL database
* - SwaggerUI: This is the api documentation platform.

## Approach to architecture design:

- **The project comprises of three microservices and a gateway Proxy router**
- - Inventory Services:
    This microservices controls the inventory functions of the sales inventory managment system. It has its own seperate datbase and allows for activities like, adding a new inventory item, deleting an inventory item and updating an inventory item.
    The Inventory services also communicates directly with the Product microservices when it is carrying out certain activities like creating a new product.
- - Product Services:
    The Product services handles all the product related activities of the sales managment system. it carries out activities like updating a product infromation, increasing the price of a product e.t.c. The product services also has its own seperate database and dedicated server.
- - Suppliers Services:
    The supplier services deals with all the activities involving the suppliers. It carries out activities like updating supplier information e.t.c. The supplier services directly communicates with the Inventory services via the use of dedicated server to server API.
- - Gateway:
    This is the proxy server, it serves as a routing point for requests from the client end. it takes requests from the client and forwards it to the proper service.

* **Database**

  - The mongodb noSQL database was used for this project. Each microservices are attached to their own database but they can still communicate with wach other.

* **How to run application**
* - Install dependencies:
* - - Navigate to each service/Folder including the gateway folder.
* - - Run the command "npm install" this will install all the dependencies needed for the project
* - Servers:
    The gateway serve is hosted locally on my machine at port 4000 "http://localhost:4000". in order to start the the gateway server
* - - Move into the gateway directory "/gateway"
* - - Run the command "npm start" to start the server or "npm run dev" to start the server in dev mode
* - - Once the gateway server is up and running, repaeat the same step for the other services i.e. Inventory, Product and suppliers
* - - If you have done the above steps correctly, all four servers should be running independently.

* **Testing and Documentation**
* - Swagger Ui: The swagger UI interface contains a detailed documentation of all the API calls that can be madeon this project. This can be located by entering "http://localhost:4000/api-docs" into the browser of your URL.Please ensure all the servers are running before testing!.
