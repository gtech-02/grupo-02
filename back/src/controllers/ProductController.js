const ProductModel = require('../models/ProductModel');
const jwt = require('jsonwebtoken');
const { update } = require('./UserController');

const ProductController = {
    create(request, response) {
        ProductModel.create(request.body);
        response.status(201);
        return response.json({
            message: "Produto criado com sucesso"
        });
    },

    async list(request, response) {
        const products = await ProductModel.findAll();
        response.json(products)
    },

    async listUm(request,response){
        let id = request.params.id;
        let categoria = await ProductModel.findOne({
            where:{
                id:id
            }
        })
        return response.json(categoria)
    },

    async update(request,response){
        let id = request.params.id;
        await ProductModel.update(request.body,{
            where:{
                id:id
            }
        })
        return response.json({
            message: "Categoria atualizada com sucesso"
        })
    },

    async deleteTodos(request,response){
        await CategoriaModal.destroy({
            where:{

            }
        })
        return response.json({
            message: "Todas as categorias foram deletadas"
        })
    },

    async deleteUm(request,response){
        let id = request.params.id;
        await CategoriaModal.destroy({
            where:{
                id:id
            }
        })
        return response.json({
            message: "A categoria de id "+id+" foi deletada com sucess0"
        })
    }

}

module.exports = ProductController;