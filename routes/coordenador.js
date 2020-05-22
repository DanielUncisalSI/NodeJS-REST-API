const express = require('express')
const router = express.Router()
const coordenadorController = require('../controllers/coordenador-controller')
const login = require('../middleware/login');


router.delete('/excluir/:id_coordenador',login.obrigatorio, coordenadorController.excluirCoordenador);
router.patch('/atualizar/:id_coordenador',login.obrigatorio, coordenadorController.atualizaCoordenador)
router.get('/localizar/:id_coordenador',login.obrigatorio, coordenadorController.localizaCoordenador)
router.get('/listar',login.obrigatorio, coordenadorController.listaCoordenador)
router.post('/cadastrar',login.obrigatorio, coordenadorController.cadastrarCoordenador)
router.post('/login', coordenadorController.loginCoordenador)

module.exports = router;