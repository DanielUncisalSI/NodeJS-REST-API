const express = require('express')
const router = express.Router()
const coordenadorController = require('../controllers/coordenador-controller')

router.delete('/excluir/:matricula', coordenadorController.excluirCoordenador);
router.patch('/atualizar/:matricula', coordenadorController.atualizaCoordenador)
router.get('/localizar/:matricula', coordenadorController.localizaCoordenador)
router.get('/listar', coordenadorController.listaCoordenador)
router.post('/cadastrar', coordenadorController.cadastrarCoordenador)
router.post('/login', coordenadorController.loginCoordenador)

module.exports = router;