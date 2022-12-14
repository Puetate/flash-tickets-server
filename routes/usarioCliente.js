const express = require('express');
const usuarioClienteController = require('../controllers/usuarioCliente');
const router = express.Router();

router.get('/', usuarioClienteController.getAllUsuarioCliente);
router.post('/',usuarioClienteController.postUsuarioCliente);
module.exports = router;

