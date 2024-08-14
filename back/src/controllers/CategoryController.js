const CategoryModel = require('../models/CategoryModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CategoryController = {
    async create(request, response) {
        CategoryModel.create(request.body);
        messageReturn = 'Categoria criada com sucesso!'
        response.status(201);
        return response.json({
            message: messageReturn
        });
    },


    async list(request, response) {
        const category = await CategoryModel.findAll();
        return response.json(category);
    },

    async listUm(request, response){
        let id = request.params.id;
        const user = await CategoryModel.findOne({
            where:{
                id: id
            }
        })
        return response.json(user);
    },

    async update(request, response) {
        let id = request.params.id;
        
        CategoryModel.update(request.body, {
            where: { id } // id: id
        });

        return response.json({
            message: "Categoria Atualizada com sucesso"
        });
    },

    async deleteUm (request, response) {
        let id = request.params.id;
        CategoryModel.destroy({
            where: { id }
        });

        return response.json({
            message: "Categoria deletada com sucesso"
        })
    }, 

    async deleteTodos(request, response){
        await CategoryModel.destroy({
            where: {

            }
        })
        return response.json('Todos as categorias foram deletados com sucesso');

    }
}

module.exports = CategoryController;