const connection = require('./connection');

const UserModel = require('../models/UserModel');
// const ProductModel = require('../models/ProductModel');
// const ImageModel = require('../models/ImageModel');

connection.sync({force: true});

