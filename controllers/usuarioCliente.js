const usuarioCliente = require('../models/usarioCliente');

exports.getAllUsuarioCliente = async(req,res,next) => {
    try {
        const [allUsuarioCLiente] = await usuarioCliente.fetchAll();
        res.status(200).json(allUsuarioCLiente);
    } catch (error) {
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }
};

exports.postUsuarioCliente = async(req,res,next) => {
    try {
        const postResponse = await usuarioCliente.post(req.body.nombre,req.body.apellido,req.body.cedula,req.body.telefono,req.body.direccion,req.body.email,req.body.contrasenia,req.body.usuariocliente);
        res.status(201).json(postResponse);
    } catch (error) {
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }
};