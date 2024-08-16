const ProductModel = require('../models/ProductModel');
const jwt = require('jsonwebtoken');
const { update } = require('./UserController');

const ProductController = {
    create(request, response) {
        try {
            ProductModel.create(request.body);
            response.status(201);
            return response.json({
                message: "Produto criado com sucesso"
            });
        } catch (error) {
            return response.json({
                message: "Erro ao criar produto"
            });
        }

    },

    async list(request, response) {
        try {
            const products = await ProductModel.findAll();
            response.json(products)
        } catch (error) {
            return response.json({
                message: "Erro ao listar"
            })
        }

    },

    async listUm(request, response) {
        try {
            let id = request.params.id;
            let categoria = await ProductModel.findOne({
                where: {
                    id: id
                }
            })
            return response.json(categoria)
        } catch (error) {
            return response.json({
                message: "Erro ao listar um"
            })
        }

    },

    async update(request, response) {
        try {
            let id = request.params.id;
            await ProductModel.update(request.body, {
                where: {
                    id: id
                }
            })
            return response.json({
                message: "Categoria atualizada com sucesso"
            })
        } catch (error) {
            return response.json({
                message: "Erro ao atualizar categoria"
            })
        }

    },

    async deleteTodos(request, response) {
        try {
            await CategoriaModal.destroy({
                where: {

                }
            })
            return response.json({
                message: "Todas as categorias foram deletadas"
            })
        } catch (error) {
            return response.json({
                message: "Erro ao deletar todas as categorias"
            })
        }

    },

    async deleteUm(request, response) {
        try {
            let id = request.params.id;
            await CategoriaModal.destroy({
                where: {
                    id: id
                }
            })
            return response.json({
                message: "A categoria de id " + id + " foi deletada com sucesso"
            })
        }catch(error){
            return response.json({
                message: "Erro ao deletar um produto"
            })
        }

    }

}

module.exports = ProductController;