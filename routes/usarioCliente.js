const express = require('express');
const usuarioClienteController = require('../controllers/usuarioCliente');
const router = express.Router();

router.get('/', usuarioClienteController.getAllUsuarioCliente);
router.post('/',usuarioClienteController.postUsuarioCliente);
router.put('/',usuarioClienteController.putUsuarioCliente);
router.delete('/:id',usuarioClienteController.deleteUsuarioCliente);
router.get('/login',usuarioClienteController.getUsuarioClienteLogeo);

module.exports = router;

