const express = require('express');
const router = express.Router();
const mysql = require('..//mysql').pool
const pedidosController = require('../controllers/pedidos-controller');

router.get('/',pedidosController.getPedidos)
router.post('/cadastro', pedidosController.cadastroPedidos)
router.get('/:id', pedidosController.getPedidosPorID)
router.patch('/:id', pedidosController.editaPedidos)
router.delete('/', pedidosController.deletaPedidos)


module.exports = router;
