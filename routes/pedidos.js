const express = require('express');
const router = express.Router();

// retorna todos os pedido
router.get('/', function(req, res){
    res.status(200).send({
        mensagem:'Usando o GET na rota Pedidos'
    })
})

// insere um pedido
router.post('/',function(req, res){
    pedido ={
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }
    res.status(201).send({
        mensagem : 'usando o POST da rota Pedido',
        pedidoCriado: pedido
})
})

//retorna apenas um pedido por ID
router.get('/:id_pedido', (req, res)=>{
    const id = req.params.id_pedido

    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'VC descobriu o ID especial',
          id: id
        })
    }else{
       res.status(200).send({
           mensagem : 'Voce passou um ID',
           id:id //aqui é outra objeto do json
       })  
    }
   
})
 // Edita um pedido
router.patch('/',(req, res)=>{
    res.status(201).send({
        mensagem : 'Usando o PATCH na rota pedido'
    })
})

//deleta um produto
router.delete('/',(req, res)=>{
    res.status(201).send({
        mensage: 'Usando o DELETE na rota produto'
    })
})

module.exports = router;