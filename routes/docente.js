const express = require('express')
const router = express.Router()
const docenteController = require('../controllers/docente-controller')
const login = require('../middleware/login');

router.delete('/excluir/:id_docente', login.obrigatorio, docenteController.excluirDocente);
router.patch('/atualizar/:id_docente', login.obrigatorio, docenteController.atualizarDocente)
router.get('/localizar/:id_docente', login.obrigatorio, docenteController.localizarDocente)
router.get('/listar', login.obrigatorio, docenteController.listarDocente)
router.post('/cadastrar', login.obrigatorio, docenteController.cadastrarDocente)

module.exports = router;