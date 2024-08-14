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

    // async login(request, response) {
    //     let email = request.body.email;
    //     let password = request.body.password
    //     let messageCompare = ''
    //     // let authSecret = 'Sfk802$#djhsa@Sf93s2&(3'
    //     // Controle para tornar email e senha obrigatórios
    //     if (!email || !password){
    //         messageCompare = 'email e password são obrigatórios!'
    //     } else {
    //         // Buscando usuário com o email passado pelo body
    //         let user = await UserModel.findOne({
    //             where: { email }
    //         });
            
    //         let userPassword = user ? user.password : ''
    //         let hasValid = await bcrypt.compare(password, userPassword);
    //         // Lógica para criação do token válido por 8h
    //         const expiresIn = '8h'
    //         const token = hasValid ? jwt.sign({
    //             id: user.id, name: user.firstname, email: user.email}, process.env.JWT_SECRET, {
    //                 expiresIn
    //             }) : 'Usuário ou senha inválido!'
            
    //         messageCompare = token
    //     }

    //     response.json({
    //         message: messageCompare
    //     })
    // },

    // async list(request, response) {
    //     const category = await UserModel.findAll();

    //     /*const products = await ProductModel.findAll({
    //         where: {
    //             user_id: users.id
    //         }
    //     });

    //     users.setDataValue('products', products);*/

    //     return response.json(category);
    // },

    // async update(request, response) {
    //     let id = request.params.id;
        
    //     CategoryModel.update(request.body, {
    //         where: { id } // id: id
    //     });

    //     return response.json({
    //         message: "Categoria Atualizada com sucesso"
    //     });
    // },

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