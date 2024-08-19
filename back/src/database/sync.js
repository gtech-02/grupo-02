const connection = require('./connection');


require('../models/UserModel');
require('../models/CategoryModel');
require('../models/ProductModel');
require('../models/ImageModel');
require('../models/ProductCategoryModel');
require('../models/ProductOptionsModel');


connection.sync({ force: true });