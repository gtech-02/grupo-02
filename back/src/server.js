const express = require('express');
const app = express();

app.use(express.json());

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const CategoryController = require('./controllers/CategoryController');
const UserCreateValidation = require("./middleware/UserCreateValidation");
const JwtVerifyToken = require('./middleware/JwtVerifyToken');
const ImageController = require('./controllers/ImageController');

const PrivateRoutes = express.Router();
PrivateRoutes.use(JwtVerifyToken);

//USUARIOS
app.post('/users', UserCreateValidation, UserController.create);
app.post('/login', UserController.login);
app.get('/users', UserController.list);
PrivateRoutes.get('/users/:id', UserController.listUm);
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
app.get('/category', CategoryController.list);
app.get('/category', CategoryController.listUm);
PrivateRoutes.post('/category', CategoryController.create);
PrivateRoutes.put('/category/:id', CategoryController.update);
PrivateRoutes.delete('/category/:id', CategoryController.deleteUm);
PrivateRoutes.delete('/category/', CategoryController.deleteTodos);

app.use(PrivateRoutes);
app.listen(3000);
