const express = require('express');
const router = express.Router();
const produtosControler = require('../controllers/produtos-controller')

router.get('/lista',produtosControler.getProdutos);
router.post('/cadastro', produtosControler.cadastraProduto);
router.get('/localiza/:id_produto', produtosControler.localizaProduto);
router.patch('/',produtosControler.editaProdutos)
router.delete('/', produtosControler.deletaProdutos)

module.exports = router;