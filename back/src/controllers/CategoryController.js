const CategoryModel = require('../models/CategoryModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CategoryController = {
    async create(request, response) {
        try {
            CategoryModel.create(request.body);
            response.status(201);
            return response.json({
<<<<<<< HEAD
                message: messageReturn
            })
        } catch(error){
            return response.json({
                message: "Erro encontrado"
            })
=======
                messageReturn: 'Categoria criada com sucesso!'
            });
        } catch (error) {
            return response.json({
                messageReturn: 'Erro na criação de categoria'
            });
>>>>>>> victor
        }
    },

    async list(request, response) {
        try {
            const category = await CategoryModel.findAll();
            return response.json(category);
        } catch (error) {
            return response.json({
                message: 'Erro na exibição da lista'
            })
        }
    },

    async listUm(request, response) {
<<<<<<< HEAD
        let id = request.params.id;
        const user = await CategoryModel.findOne({
            where: {
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
=======
        try {
            let id = request.params.id;
            const user = await CategoryModel.findOne({
                where: {
                    id: id
                }
            })
            return response.json(user);
        } catch (error) {
            return response.json({
                message: 'Erro ao criar lista de um usúario'
            })
        }

    },

    async update(request, response) {
        try {
            let id = request.params.id;
            CategoryModel.update(request.body, {
                where: { id } // id: id
            })
            return response.json({
                message: "Categoria Atualizada com sucesso"
            });
        } catch (error) {
            return response.json({
                message: "Erro ao atualizar a categoria"
            });
        }
>>>>>>> victor

    },

    async deleteUm(request, response) {
<<<<<<< HEAD
        let id = request.params.id;
        CategoryModel.destroy({
            where: { id }
        });

        return response.json({
            message: "Categoria deletada com sucesso"
        })
    },

    async deleteTodos(request, response) {
        await CategoryModel.destroy({
            where: {
=======
        try {
            let id = request.params.id;
            CategoryModel.destroy({
                where: { id }
            });

            return response.json({
                message: "Categoria deletada com sucesso"
            })
        }catch(error){
            return response.json({
                message: "Erro ao deletar categoria"
            })
        }
        
    },

    async deleteTodos(request, response) {
        try{
            await CategoryModel.destroy({
                where: {
    
                }
            })
            return response.json('Todos as categorias foram deletados com sucesso');
        }catch(error){
            return response.json('Erro ao deletar todas categorias');
        }
>>>>>>> victor


    }
}

module.exports = CategoryController;