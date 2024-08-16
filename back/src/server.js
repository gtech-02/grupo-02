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
app.get('/users/:id', UserController.listUm);
app.post('/users', UserCreateValidation, UserController.create);
PrivateRoutes.put('/users/:id', UserController.update);
PrivateRoutes.delete('/users/:id', UserController.deleteUm);
PrivateRoutes.delete('/users/', UserController.deleteTodos);    

//PRODUTOS
app.get('/products', ProductController.list); 
app.get('/products/:id', ProductController.listUm);
PrivateRoutes.post('/products', ProductController.create);
PrivateRoutes.put('/products/:id', ProductController.update);


PrivateRoutes.delete('/products/', ProductController.deleteTodos);
PrivateRoutes.delete('/products/:id', ProductController.deleteUm);

//CATEGORIA
app.get('/category', CategoryController.list);
<<<<<<< HEAD
app.get('/category', CategoryController.listUm);
PrivateRoutes.post('/category', UserCreateValidation, CategoryController.create);
=======
app.get('/category/:id', CategoryController.listUm);
PrivateRoutes.post('/category', CategoryController.create);
>>>>>>> victor
PrivateRoutes.put('/category/:id', CategoryController.update);
PrivateRoutes.delete('/category/:id', CategoryController.deleteUm);
PrivateRoutes.delete('/category/', CategoryController.deleteTodos);

app.use(PrivateRoutes);
app.listen(3000);
