const ImageModel = require('../models/ImageModel');
const { alterar } = require('../controllers/UserController');

const ImageController = {
    // criar imagem
    imageCreate(request, response){

        try{
            ImageModel.create(request.body);
            response.status(201);
            return response.json({
                messageReturn: 'Imagem inserida!'
            })

        } catch(error){
            return response.json({
                messageReturn: 'Erro ao inserir imagem.'
            })
        }
    },


    // lista as imagens
    async listar(request, response){
        const imagens = await ImageModel.findAll();
        return response.json(imagens)
    },

    // lista apenas uma imagem
    async listarUm(request, response){
        let id = request.params.id;
        const imagem = await ImageModel.findOne({
            where: {
                id:id
            }
        })

        return response.json(imagem)
    },


    // atualizações de imagens
    async alterar(request, response) {

        try{
            let id = request.params.id
        await ImageModel.update(request.body, {
            where: {
                id:id
            }
        })
        return response.json('Imagem alterada com sucesso!')

        } catch(error){
            return response.json('Erro ao alterar imagem!')
        }


        // let id = request.params.id
        // await ImageModel.update(request.body, {
        //     where: {
        //         id:id
        //     }
        // })
        // return response.json('Imagem alterada com sucesso!')
    },

    async deletarTudo(request,response) {
        await ImageModel.destroy({})

        return response.json('Todos as imagens foram deletadas')

    },

    async deletarUm(request, response){
        let id = request.params.id;
        await ImageModel.destroy({
            where:{
                id:id
            }
        })

        return response.json('Imagem deletada com sucesso')
    }
}

module.exports = ImageController
