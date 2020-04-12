const mysql = require('../mysql').pool;

exports.getPedidos =  function(req, res) {
    mysql.getConnection(function (error, conn) {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'SELECT ped.id, ped.quantidade, ped.id_produto, prod.nome FROM PEDIDOS as ped INNER JOIN PRODUTOS AS prod ON ped.id_produto = prod.id',
            function (error, result) {
                if (error) { return res.status(500).send({ eror: error }) }
                const response = {
                    quantidadeRegistros: result.length,
                    pedidos: result.map(ped => {
                        return {
                            id_pedido: ped.id,
                            quantidade: ped.quantidade,
                            id_produto: ped.id_produto,
                            produto: ped.nome,
                            request: {
                                tipo: 'GET',
                                descricao: 'Retorna os detalhes de um pedido especifico',
                                url: 'http://localhost:3000/pedidos/' + ped.id

                            }
                        }
                    })
                }
                return res.status(200).send(response)
            }

        )
    })
}


exports.cadastroPedidos = function (req, res) {
    mysql.getConnection(function (error, conn) {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'INSERT INTO PEDIDOS (id_produto, quantidade) VALUES (?,?)',
            [req.body.id_produto, req.body.quantidade],
            function (error, result) {
                conn.release()
                if (error) { return res.status(500).send({ error: error }) }
                const response = {
                    mensagem: 'Pedido gravado com sucesso',
                    pedidoCriado: {
                        id_pedido: result.id,
                        id_produto: req.body.id_produto,
                        quantidade: req.body.quantidade,
                        request: {
                            tipo: 'GET',
                            descrica: 'Retorna todos os pedidos',
                            url: 'http://localhost:3000/pedidos'
                        }
                    }
                }
                return res.status(201).send(response)
            }
        )
    })
}


exports.getPedidosPorID = function (req, res) {
    mysql.getConnection(function (error, conn) {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            `SELECT ped.id, ped.quantidade, ped.id_produto, prod.nome FROM PEDIDOS as ped 
            INNER JOIN PRODUTOS AS prod ON ped.id_produto = prod.id AND ped.id = ?`,
            //'SELECT * FROM PEDIDOS WHERE ID = ?',
            [req.params.id],
            function (error, result) {
                if (error) { return res.status(500).send({ error: error }) }
                if (result.length == 0) {
                    return res.status(404).send({
                        mensagem: 'Não foi encontrado pedido com este ID '
                    })
                }
                const response = {
                    pedido: {
                        id_pedido: result[0].id,
                        id_produto: result[0].id_produto,
                        nomeProduto: result[0].nome,
                        quantidade: result[0].quantidade,
                        request: {
                            tipo: 'GET',
                            descricao: 'Retorna todos os pedidos',
                            url: 'http://localhost:3000/pedidos'
                        }
                    }
                }

                return res.status(200).send(response)
            }
        )
    })
}


exports.editaPedidos = function (req, res) {
    mysql.getConnection(function (error, conn) {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'UPDATE PEDIDOS SET id_produto=?, quantidade=?  WHERE id = ?',
            [req.body.id_produto, req.body.quantidade, req.params.id],
            function (error, result) {
                conn.release()
                if (error) { res.status(500).send({ error: error }) }
                const response = {
                    mensagem: 'Pedido atualizado com sucesso!',
                    pedidoAtualizado: {
                        id_pedido: result.id,
                        id_produto: req.body.id_produto,
                        Quantidade: req.body.quantidade,
                        request: {
                            tipo: 'GET',
                            descricao: 'Retorna os detalhes de pedido especifico',
                            url: 'http://localhost:3000/pedidos/' + req.body.id
                        }
                    }
                }
                res.status(202).send(response)
            }
        )
    })
}

exports.deletaPedidos = function(req, res){
    mysql.getConnection(function(error, conn){
        if(error){res.status(500).send({error : error})}
        conn.query('DELETE FROM PEDIDOS WHERE ID = ?',
        [req.body.id],
        function(error, result){
            conn.release()
            if(error){res.status(500).send({error : error})}
            const response = {
                mensagem : 'Pedido ' +req.body.id+ ' excluído com sucesso!',
                request: {
                    tipo :'POST',
                    descricao: 'Insere um pedido',
                    url: 'http://localhost:3000/pedido',
                    body:{
                        id_produto : 'integer',
                        quantidade: 'integer'
                    }
                } 
            }

            return res.status(202).send(response)
        }
        )
    })
}