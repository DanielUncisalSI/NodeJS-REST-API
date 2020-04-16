const express = require('express')
const router = express.Router()
const usuariosController = require('../controllers/usuarios-controller')

router.delete('/excluir', usuariosController.excluirUsuarios);
router.patch('/atualizar', usuariosController.atualizaUsuario)
router.get('/localizar/:matricula', usuariosController.localizaUsuario)
router.get('/listar', usuariosController.listaUsuarios)
router.post('/cadastrar', usuariosController.cadastrarUsuarios)
router.post('/login', usuariosController.loginUsuario)

module.exports = router;