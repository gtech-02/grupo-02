const connection = require('./connection');

require('../models/UserModel');
require('../models/CategoryModel');
require('../models/ProductModel');
require('../models/ImageModel');
require('../models/ProductCategoryModel');

connection.sync({ force: true });