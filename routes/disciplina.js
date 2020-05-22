const express = require('express')
const router = express.Router()
const disciplinaController = require('../controllers/disciplina-controller')
const login = require('../middleware/login');


router.delete('/excluir/:id_disciplina',login.obrigatorio, disciplinaController.excluirDisciplina);
router.patch('/atualizar/:id_disciplina',login.obrigatorio, disciplinaController.atualizaDisciplina)
router.get('/localizar/:id_disciplina',login.obrigatorio, disciplinaController.localizaDisciplina)
router.get('/listar',login.obrigatorio, disciplinaController.listaDisciplina)
router.post('/cadastrar',login.obrigatorio, disciplinaController.cadastrarDisciplina)

module.exports = router;