const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

app.use(express.json());

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const UserCreateValidation = require("./middleware/UserCreateValidation");
const JwtVerifyToken = require('./middleware/JwtVerifyToken');

const PrivateRoutes = express.Router();
PrivateRoutes.use(JwtVerifyToken);

app.get('/products', ProductController.list);
PrivateRoutes.post('/products',ProductController.create);
app.get('/users', UserController.list);
 
PrivateRoutes.post('/users', UserCreateValidation, UserController.create);
app.post('/login', UserController.login);
PrivateRoutes.put('/users/:id', UserController.update);
PrivateRoutes.delete('/users/:id', UserController.delete);


app.use(PrivateRoutes);
app.listen(3000);













// const UserController = require('./controllers/UserController');

// const request = {
//     body: {
//         firstname: "Joaquim",
//         surname: "Silva",
//         email: "joaqui@mail.com",
//         password: "1234",
//     }
// }

// UserController.create(request);
// UserController.list();



// const ProductController = require('./controllers/ProductController');

// const request = {
//     body: {
//         name: "Motorola",
//         price: 19.58,
//         description: "Descrição do produto"
//     }
// }

// // ProductController.create(request);
// ProductController.list();