const UserModel = require("../models/UserModel");

const UserCreateValidation = async (request, response, next) => {

    let messageReturn = ''

    if (!request.body.firstname || !request.body.surname || !request.body.email || !request.body.password) {
        messageReturn = 'firstname, surname, email e password são obrigatórios!'
        return response.status(400).json({
            message: messageReturn
        })
    }

    if (!request.body.passwordconfirm) {
        messageReturn = 'Por favor confirme sua senha!'
        return response.status(400).json({
            message: messageReturn
        })
    }

    if (request.body.password != request.body.passwordconfirm) {
        messageReturn = 'confirmação de senha divergente!'
        return response.status(400).json({
            message: messageReturn
        })
    }

    const email = request.body.email;
    const emailReq = await UserModel.findOne({
        where: { email }
    });

    if (emailReq && emailReq.dataValues.id > 0) {
        messageReturn = 'Esse email já está cadastrado!'
        return response.status(400).json({
            message: messageReturn
        })
    }

    next();
}

module.exports = UserCreateValidation;