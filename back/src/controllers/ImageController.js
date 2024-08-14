const ImageModel = require('../models/ImageModel');
const jwt = require('jsonwebtoken');

const ImageController = {
    async create(request, response) {
        ImageModel.create(request.body);
        messageReturn = 'Imagem criada com sucesso'
    }
}