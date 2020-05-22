const express = require('express')
const router = express.Router()
const cursoController = require('../controllers/curso-controller')
const login = require('../middleware/login');

router.delete('/excluir/:id_curso',login.obrigatorio, cursoController.excluirCurso);
router.patch('/atualizar/:id_curso',login.obrigatorio, cursoController.atualizarCurso)
router.get('/localizar/:id_curso',login.obrigatorio, cursoController.localizarCurso)
router.get('/listar',login.obrigatorio, cursoController.listarCurso)
router.post('/cadastrar',login.obrigatorio, cursoController.cadastrarCurso)


module.exports = router;