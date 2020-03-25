const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool

// retorna todos os produtos com tratamento de erros
router.get('/',function(req, res){  
    mysql.getConnection((error, conn) => {
        if(error){ return res.status(500).send({error: error})} 
        conn.query(
            'SELECT * FROM PRODUTOS',
              //o segundo parametro é onde fica armazenado o resultado da query pode ser usado quaquer nome 
            (error, result, field)=>{
                if(error){ return res.status(500).send({error: error})}
                const response ={
                 quantidade : result.length,
                 produtos: result.map(prod =>{
                     return {
                         id_produto: prod.id_produto,
                         nome : prod.nome,
                         preco : prod.preco,
                         request:{
                             tipo: 'GET',
                             descricao : 'Retorna os detalhes de um produto especifico',
                             url : 'http://localhost:3000/produtos/'+ prod.id

                         }
                     }
                 })   
                }
                return res.status(200).send(response)
            }
         
       )
    })
})

// retorna todos os produtos SEM tratamento de erros
/*router.get('/',function(req, res){  
    mysql.getConnection((error, conn) => {
        conn.query(
            'SELECT * FROM PRODUTOS',
            (error, resultado)=>{
                return res.send({response : resultado})
            }
         
       )
    })
})*/


//inseir produto completo com tratamento de erros
router.post('/',function(req, res){  
    mysql.getConnection(function(error, conn){
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'INSERT INTO PRODUTOS (nome, preco) VALUES (?,?)',
            [req.body.nome, req.body.preco],
            (error, result, field) => {
            conn.release()
            if(error){return res.status(500).send({error : error})}
            const response = {
                mensagem : 'Produto inserido com sucesso!',
                produtoCriado:{
                    id_produto : result.id,
                    nome : req.body.nome,
                    preco: req.body.preco,
                    request:{
                        tipo: 'GET',
                        descricao : 'Retorna todos os produtos',
                        url : 'http://localhost:3000/produtos/'

                    }
                }
            }
            return res.status(201).send(response)
        }
        )
    })
})


// insere um produto SEM tratamento de error
/*router.post('/',function(req, res){  
    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO PRODUTOS (nome, preco) VALUES (?,?)',
            [req.body.nome, req.body.preco],
            conn.release(),
            res.send({mensagem : 'Produto inserido com sucesso'}) 
       )
    })
})*/



//retorna apenas um produto por ID com tratamento de erros
router.get('/:id_produto',(req, res)=>{
    mysql.getConnection((error, conn) => {
        if(error){ return res.status(500).send({ error : error})}
        conn.query('SELECT * FROM PRODUTOS WHERE ID = ?',
        [req.params.id_produto],
          (error, result, fields) =>{
              if(error){return res.status(500).send({error : error})}
              if(result.length == 0){
                  return res.status(404).send({
                      mensagem :'Não foi encontrado produto com este ID'
                  })
              }
              const response = {
                produto:{
                    id_produto : result[0].id,
                    nome : result[0].nome,
                    preco: result[0].preco,
                    request:{
                        tipo: 'GET',
                        descricao : 'Retorna todos os produtos',
                        url : 'http://localhost:3000/produtos/'

                    }
                }
            }
              return res.status(200).send(response)
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
           (error, result, field)=>{
               conn.release()
               if(error){return res.status(500).send({error : error})}
               const response = {
                mensagem : 'Produto atualizado com sucesso!',
                produtoAtualizado:{
                    id_produto : req.body.id,
                    nome : req.body.nome,
                    preco: req.body.preco,
                    request:{
                        tipo: 'GET',
                        descricao : 'Retorna os detalhes de produto especifico',
                        url : 'http://localhost:3000/produtos/'+req.body.id

                    }
                }
            }
               res.status(202).send(response)
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
            (error, result, field)=>{
                conn.release()
                if(error){return res.status(500).send({error : error})}
               const response = {
                mensagem : 'Produto ' +req.body.id+ ' excluído com sucesso!',
                request: {
                    tipo :'POST',
                    descricao: 'Insere um produto',
                    url: 'http://localhost:3000/produtos',
                    body:{
                        nome : 'String',
                        preco: 'Number'
                    }
                }

                }
               return res.status(202).send(response)
            }
        )
    })
})

module.exports = router;