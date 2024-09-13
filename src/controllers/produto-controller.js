const repository = require('../repository/produto-repository');

exports.get = async(req, res, next) => {
    try {
        const data = await repository.get();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Erro ao buscar produto'
        });
    }
}

exports.post = async(req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(201).send({message: 'Produto criado'});
    } catch (error) {
        res.status(400).send({
            message: 'Erro ao cadastrar produto'
        });
    }
}

exports.put = async(req, res, next) => {
    try {
        const id = Number(req.params.id);
        const body = req.body;

        await repository.update(id, body);
        res.status(204).send({message: 'Produto atualizado'});
    } catch (error) {
        res.status(400).send({
            message: 'Erro ao atualizar produto'
        });
    }
}

exports.getById = async(req, res, next) => {
    try {
        const id = Number(req.params.id)

        const data = await repository.getById(id);
        if(data == null){
            res.status(404).send({message: 'Produto nao encontrado'})
        }

        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Erro ao buscar produto', error
        });
    }
}

exports.delete = async(req, res, next) => {
    const id = req.params.id
    let response = {
        id: id,
        mensagem: 'Removido'
    };

    try {
        await repository.delete(id)
        res.status(204).send(response)
    } catch (error) {
        res.status(400).send({mensagem: 'Erro ao remover', error})
    }
}