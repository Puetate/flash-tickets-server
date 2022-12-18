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
        const postResponse = await usuarioCliente.post(req.body.nombre,req.body.apellido,req.body.cedula,req.body.telefono,req.body.direccion,req.body.correo,req.body.contrasenia,req.body.usuario);
        console.log(postResponse);
        res.status(201).json(postResponse);
    } catch (error) {
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }
};

exports.putUsuarioCliente = async(req,res,next) => {
    try {
        const putResponse = await usuarioCliente.update(req.body.id,req.body.nombre,req.body.apellido,req.body.cedula,req.body.telefono,req.body.direccion,req.body.correo,req.body.contrasenia,req.body.usuario);
        res.status(201).json(putResponse);
    } catch (error) {
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }
};

exports.deleteUsuarioCliente = async(req,res,next) => {
    try {
        console.log(req.params.id)
        const deleteResponse = await usuarioCliente.delete(req.params.id);
        res.status(201).json(deleteResponse);
    } catch (error) {
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }
};


exports.getUsuarioClienteLogeo = async(req,res,next) => {
    try {
        console.log(req.body.correo,req.body.contrasenia);
        const [usuarioCLienteLogeo] = await usuarioCliente.logeo(req.body.correo,req.body.contrasenia);
        res.status(200).json(usuarioCLienteLogeo);
    } catch (error) {
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }
};