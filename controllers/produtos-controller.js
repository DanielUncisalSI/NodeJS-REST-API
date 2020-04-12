const mysql = require('../mysql').pool

exports.getProdutos = function(req, res){  
    mysql.getConnection((error, conn) => {
        if(error){ return res.status(500).send({error: error})} 
        conn.query(
            'SELECT * FROM PRODUTOS',
              //o segundo parametro é onde fica armazenado o resultado da query pode ser usado quaquer nome 
            function(error, result){
                if(error){ return res.status(500).send({error: error})}
                const response ={
                 quantidade : result.length,
                 produtos: result.map(prod =>{
                     return {
                         id_produto: prod.id,
                         nome : prod.nome,
                         preco : prod.preco,
                         request:{
                             tipo: 'GET',
                             descricao : 'Retorna os detalhes de um produto especifico',
                             url : 'http://localhost:3000/produtos/localiza/'+ prod.id

                         }
                     }
                 })   
                }
                return res.status(200).send(response)
            }
       )
    })
}


exports.cadastraProduto = function(req, res){  
    mysql.getConnection(function(error, conn){
        if(error){return res.status(500).send({error: error})}
        conn.query(
            'INSERT INTO PRODUTOS (nome, preco) VALUES (?,?)',
            [req.body.nome, req.body.preco],
            (error, result, field) => {
            conn.release()
            if(error){return res.status(500).send({error : error })}
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
}

exports.localizaProduto = function(req, res){
    mysql.getConnection((error, conn) => {
        if(error){ return res.status(500).send({ error : error})}
        conn.query('SELECT * FROM PRODUTOS WHERE ID = ?',
        [req.params.id_produto],
           (error, result) =>{
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
}


exports.editaProdutos = function(req, res){  
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
}

exports.deletaProdutos = function(req, res, next){
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
}