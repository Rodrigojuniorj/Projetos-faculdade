'use strict';

const repository = require('../repositories/cliente-repository');
const md5 = require('md5');

exports.get = async(req, res, next) => {
    const codigo = req.params.id
    console.log(codigo)
    try {
        var data = await repository.get(codigo);
        res.status(200).send(data);
    } catch (e) { 
        res.status(400).send(e);
    }
}

exports.post = async(req, res, next) => {
    try {
        if(req.body.USR_EMAIL == ''){
            res.status(400).send({
                message: 'Campo e-mail obrigatório',
            });
        }
        if(req.body.USR_SENHA == ''){
            res.status(400).send({
                message: 'Campo Senha é obrigatório',
            });
        }
        if(req.body.USR_TIPO == ''){
            res.status(400).send({
                message: 'Campo Tipo é obrigatório',
            });
        }
        if(req.body.USR_NOME == ''){
            res.status(400).send({
                message: 'Campo Nome é obrigatório',
            });
        }
        else{
            var data = await repository.create({
                USR_EMAIL:   req.body.USR_EMAIL,
                USR_TIPO:   req.body.USR_TIPO,
                USR_NOME:   req.body.USR_NOME,
                USR_SENHA:   md5(req.body.USR_SENHA) 
            });
            res.status(201).send({
                message: 'Inserido com sucesso'
            });
        }
    } catch (e) {
        console.log(e);
        res.status(400).send({
            message: 'Falha na inserção',
            data: e
        });
    }
}

exports.delete = async(req, res, next) => {
    try {
         var data = await repository.delete(req.body.USR_ID);
        res.status(201).send({
            message: 'Excluído com sucesso'
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha na exclusão',
            data: e
        });
    }
}

exports.update = async(req, res, next) => {
    try {
        if(req.body.USR_EMAIL == ''){
            res.status(400).send({
                message: 'Campo e-mail obrigatório',
            });
        }
        if(req.body.USR_SENHA == ''){
            res.status(400).send({
                message: 'Campo Senha é obrigatório',
            });
        }
        if(req.body.USR_TIPO == ''){
            res.status(400).send({
                message: 'Campo Tipo é obrigatório',
            });
        }
        if(req.body.USR_NOME == ''){
            res.status(400).send({
                message: 'Campo Nome é obrigatório',
            });
        }
        else{
            var data = await repository.put(req.body.USR_ID, {
                USR_EMAIL:   req.body.USR_EMAIL,
                USR_TIPO:   req.body.USR_TIPO,
                USR_NOME:   req.body.USR_NOME,
                USR_SENHA:   md5(req.body.USR_SENHA) 
            });
            res.status(201).send({
                message: 'Editado com sucesso'
            });
        }
    } catch (e) {
        res.status(400).send({
            message: 'Falha na edição',
            data: e
        });
    }
}

exports.login = async(req, res, next) => {
    const email = req.body.USR_EMAIL;
    const password = req.body.password;

    db.query("Select * from usuario where USR_EMAIL = ? AND USR_SENHA = ?", 
    [email, password], (err, result) => {
        if(err){
            res.send(err);
        }
    })
}