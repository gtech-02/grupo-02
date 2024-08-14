const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

app.use(express.json());

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const CategoryController = require('./controllers/CategoryController');
const UserCreateValidation = require("./middleware/UserCreateValidation");
const JwtVerifyToken = require('./middleware/JwtVerifyToken');

const PrivateRoutes = express.Router();
PrivateRoutes.use(JwtVerifyToken);



//USUARIOS
app.post('/login', UserController.login);
app.get('/users', UserController.list);
app.get('/users', UserController.listUm);
PrivateRoutes.post('/users', UserCreateValidation, UserController.create);
PrivateRoutes.put('/users/:id', UserController.update);
PrivateRoutes.delete('/users/:id', UserController.deleteUm);
PrivateRoutes.delete('/users/', UserController.deleteTodos);


//PRODUTOS
app.get('/products', ProductController.list);
app.get('/products', ProductController.listUm);
PrivateRoutes.post('/products', UserCreateValidation, ProductController.create);
PrivateRoutes.put('/products/:id', ProductController.update);
PrivateRoutes.delete('/products/', ProductController.deleteTodos);
PrivateRoutes.delete('/products/:id', ProductController.deleteUm);

//CATEGORIA
PrivateRoutes.post('/category', CategoryController.create);
PrivateRoutes.delete('/category/:id', CategoryController.deleteUm);


app.use(PrivateRoutes);
app.listen(3000);
