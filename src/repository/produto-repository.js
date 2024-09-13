const mongoose = require('mongoose')
const Produto = mongoose.model('Produto')

exports.get = async ()=> {
    const result = await Produto.find({active: true});
    return result;
}

exports.create = async (data)=> {
    let produto = Produto(data);
    await produto.save();
}

exports.delete = async (id)=> {
    const filter = {id : id}
    await Produto.findOneAndUpdate(filter, {
        $set:
        {
            active: false
        }
    });
}

exports.getById = async (id) => {
    const result = await Produto.findOne({id : id});
    return result;
}

exports.update = async(id, data)=> {
    const filter = {id : id}
    await Produto.findOneAndUpdate(filter, {
        $set:
        {
            nome: data.nome,
            preco: data.preco
        }
    });
}