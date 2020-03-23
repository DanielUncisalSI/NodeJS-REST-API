const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool

// retorna todos os produtos com tratamento de erros
/*router.get('/',function(req, res){  
    mysql.getConnection((error, conn) => {
        if(error){ return res.status(500).send({error: error})} 
        conn.query(
            'SELECT * FROM PRODUTOS',
            (error, resultado, field)=>{
                if(error){ return res.status(500).send({error: error})}
                return res.status(200).send({response : resultado})
            }
         
       )
    })
})*/

// retorna todos os produtos SEM tratamento de erros
router.get('/',function(req, res){  
    mysql.getConnection((error, conn) => {
        conn.query(
            'SELECT * FROM PRODUTOS',
            (error, resultado)=>{
                return res.send({response : resultado})
            }
         
       )
    })
})


//inseir produto completo com tratamento de erros
/*router.post('/',(req, res, next)=>{  
    mysql.getConnection((error, conn) => {
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'INSERT INTO PRODUTOS (nome, preco) VALUES (?,?)',
            [req.body.nome, req.body.preco],
            (error, resultado, field) => {
            conn.release()
            if(error){
               return res.status(500).send({
                error : error,
                response : null
                })
            }
            res.status(201).send({
           mensagem : 'Produto inserido com sucesso!',
          id_produto : resultado.insertId
        
})*/


// insere um produto SEM tratamento de error
router.post('/',function(req, res){  
    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO PRODUTOS (nome, preco) VALUES (?,?)',
            [req.body.nome, req.body.preco],
            conn.release(),
            res.send({mensagem : 'Produto inserido com sucesso'}) 
       )
    })
})



//retorna apenas um produto por ID com tratamento de erros
router.get('/:id_produto',(req, res)=>{
    mysql.getConnection((error, conn) => {
        if(error){ return res.status(500).send({ error : error})}
        conn.query('SELECT * FROM PRODUTOS WHERE ID = ?',
        [req.params.id_produto],
          (error, resultado, fields) =>{
              if(error){return res.status(500).send({error : error})}
              return res.status(200).send({response : resultado})
          }
          )
    })
})

// Edita um produto SEM tratamento de error
router.patch('/',function(req, res){  
    mysql.getConnection((error, conn) =>{
        if(error){return res.status(500).send({error : error})}
        conn.query(
            'UPDATE PRODUTOS SET nome=?, preco=? WHERE id=?',
            [
            req.body.nome,
            req.body.preco,
            req.body.id
           ],
           (error, resultado, field)=>{
               conn.release()
               if(error){return res.status(500).send({error : error})}

               res.status(202).send({
                   mensagem : 'Produto alterado com sucesso!'
                })
           }
           )
    })
})


//deleta um produto
router.delete('/',(req, res, next)=>{
    mysql.getConnection((error, conn)=> {
        if(error){ return res.status(500).send({error : error})}
        conn.query(
            'DELETE FROM PRODUTOS WHERE ID = ?',
            [req.body.id],
            (error, resultado, field)=>{
                conn.release()
                if(error){return res.status(500).send({error : error})}
                res.status(202).send({
                    mensagem: 'Produto excluído com sucesso!'
                })
            }
        )
    })
})

module.exports = router;