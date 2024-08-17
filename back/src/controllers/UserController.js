const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserController = {
    async create(request, response) {
        try {
            let hash = await bcrypt.hash(request.body.password, 10);
            request.body.password = hash;

            UserModel.create(request.body);
            messageReturn = 'Usuario criado com sucesso!'

            response.status(201);
            return response.json({
                message: messageReturn
            });
        } catch (error) {
            return response.json({
                message: 'Erro ao criar usuario'
            });
        }
    },

    async login(request, response) {
        try {
            let email = request.body.email;
            let password = request.body.password
            let messageCompare = ''
            // let authSecret = 'Sfk802$#djhsa@Sf93s2&(3'
            // Controle para tornar email e senha obrigatórios
            if (!email || !password) {
                messageCompare = 'email e password são obrigatórios!'
            } else {
                // Buscando usuário com o email passado pelo body
                let user = await UserModel.findOne({
                    where: { email }
                });

                let userPassword = user ? user.password : ''
                let hasValid = await bcrypt.compare(password, userPassword);
                // Lógica para criação do token válido por 8h
                const expiresIn = '8h'
                const token = hasValid ? jwt.sign({
                    id: user.id, name: user.firstname, email: user.email
                }, process.env.JWT_SECRET, {
                    expiresIn
                }) : 'Usuário ou senha inválido!'

                messageCompare = token
            }

            response.json({
                message: messageCompare
            })
        } catch (error) {
            return response.json({
                message: 'Erro ao fazer login'
            })
        }

    },

    async list(request, response) {
        try {
            const users = await UserModel.findAll();
            return response.json(users);
        } catch (error) {
            return response.json({
                message: 'Erro ao listar todos'
            })
        }

    },

    async listUm(request, response) {
        try {
            let id = request.params.id;
            const user = await UserModel.findOne({
                where: {
                    id: id
                }
            })
            response.status(200);
            return response.json(user);
        } catch (error) {
            response.status(404);
            return response.json({
                message: 'Erro ao localizar usuário'
            });
        }
    },

    async update(request, response) {
        try {
            let id = request.params.id;

            UserModel.update(request.body, {
                where: { id }
            });

            return response.json({
                message: "Usuario atualizado com sucesso"
            });
        } catch (error) {
            return response.json({
                message: 'Erro ao atualizar'
            })
        }

    },


    async deleteTodos(request, response) {
        try {
            await UserModel.destroy({
                where: {

                }
            })
            return response.json('Todos os usuários foram deletados com sucesso');
        } catch (error) {
            return response.json({
                message: 'Erro ao deletar todos'
            })
        }


    },

    async deleteUm(request, response) {
        try {
            let id = request.params.id;
            UserModel.destroy({
                where: { id }
            });

            response.status(204);
            return response.json({
                message: "Usuario deletado com sucesso"
            })
        } catch (error) {
            return response.json({
                message: 'Erro ao deletar um'
            })
        }
    }
}

module.exports = UserController;