const mysql = require('../mysql').pool
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.excluirCoordenador = function(req, res, next){
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query('DELETE FROM COORDENADOR WHERE MATRICULA = ?', [req.params.matricula],
            (error, result, field) => {
                conn.release()
                if (error) { return res.status(500).send({ error: error + "Usuário " + req.body.matricula + " não existe" }) }
                const response = {
                    mensagem: 'Coordenador ' + req.params.matricula + ' excluído com sucesso!',
                }
                return res.status(202).send(response)
            }
        )
    })
}




exports.localizaCoordenador = function(req, res) {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query('SELECT * FROM coordenadors WHERE matricula_coord = ?',
            [req.params.matricula],
            (error, result) => {
                if (error) { return res.status(500).send({ error: error }) }
                if (result.length == 0) {
                    return res.status(404).send({
                        mensagem: 'Não foi encontrado coordenador com esta matrícula'
                    })
                }
                const response = {
                    coordenador: {
                        matricula: result[0].matricula_coord,
                        nome: result[0].nome_coord,
                        email: result[0].email_coord,
                        curso: result[0].curso_coord,
                    }
                }
                return res.status(200).send(response)
            }
        )
    })
}


exports.listaCoordenador = function (req, res) {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(`SELECT * FROM coordenadors `,
            //o segundo parametro é onde fica armazenado o resultado da query pode ser usado quaquer nome 
            function (error, result) {
                if (error) { return res.status(500).send({ error: error }) }
                const response = {
                    quantidade: result.length,
                    Coordenador: result.map(coor => {
                        return {
                            matricula: coor.matricula,
                            nome: coor.nome,
                            email: coor.email,
                            curso: coor.curso,
                           
                        }
                    })
                }
                return res.status(200).send(response)
            }
        )
    })
}



exports.atualizaCoordenador = function (req, res) {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        bcrypt.hash(req.body.senha, 10, function (errBcrypt, hash) {
            if (errBcrypt) { return res.status(500).send({ error: errBcrypt }) }
        conn.query(
            'UPDATE coordenadors SET nome_coord=?, email_coord=?, senha_coord=?, curso_coord=? WHERE matricula_coord=?',
            [
               
                req.body.nome,
                req.body.email,
                hash,
                req.body.curso,
                req.params.matricula,
            ],
            (error, result, field) => {
                conn.release()
                if (error) { return res.status(500).send({ error: error }) }
                const response = {
                    mensagem: 'Coordenador atualizado com sucesso!',
                    coordenadorAtualizado: {
                        matricula: req.params.matricula,
                        nome: req.body.nome,
                        email: req.body.email,
                        curso: req.body.curso,
                    }
                }
                res.status(202).send(response)
            })
        })
    })
}



exports.cadastrarCoordenador = function (req, res) {
    mysql.getConnection(function (error, conn) {
        if (error) { return res.status(500).send({ erro: error }) }
        conn.query('SELECT * FROM coordenadors WHERE matricula_coord = ?',
            [req.body.matricula],
            function (error, result) {
                if (error) { return res.status(500).send({ error: error }) }
                if (result.length > 0) {
                    res.status(409).send({ mensagem: 'Coordenador já cadastrado' })
                } else {
                    bcrypt.hash(req.body.senha, 10, function (errBcrypt, hash) {
                        if (errBcrypt) { return res.status(500).send({ error: errBcrypt }) }
                        conn.query('INSERT INTO coordenadors (nome_coord, email_coord, senha_coord, matricula_coord, curso_coord) VALUES (? ,?, ?, ?, ?)',
                            [req.body.nome, req.body.email, hash, req.body.matricula, req.body.curso],
                            function (error, result) {
                                conn.release()
                                if (error) { return res.status(500).send({ error: error }) }
                                var response = {
                                    mensagem: 'Coordenador criado com sucesso!',
                                    usuarioCriado: {
                                        nome: req.body.nome,
                                        email: req.body.email,
                                        matricula: req.body.matricula,
                                        curso: req.body.curso
                                    }
                                }
                                return res.status(201).send({ response })
                            })
                    })
                }
            })
    })
}

exports.loginCoordenador = function(req, res, next) {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        const query = `SELECT * FROM coordenadors WHERE email_coord = ? `;
        conn.query(query, [req.body.email], (error, results, fields) => {
            conn.release();
            if (error) { return res.status(500).send({ error: error }) }
            if (results.length < 1) {
                return res.status(401).send({ mensagem: 'Falha na autenticação do e-mail!' })
            }
            bcrypt.compare(req.body.senha, results[0].senha_coord, (err, result) => {
                if (err) {
                    return res.status(401).send({ mensagem: 'Falha na autenticação da senha!' })
                }
                if (result) {
                    const token = jwt.sign({
                        email: results[0].email_coord,
                        nome: results[0].nome_coord
                    },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        });
                    return res.status(200).send({
                        mensagem: 'Autenticado com sucesso',                       
                        token: token,
                        nome: results[0].nome_coord,
                        curso: results[0].curso_coord,
                    });
                }
                return res.status(401).send({ mensagem: 'Falha na autenticação!' })
            });
        });
    });
}




/*exports.atualizaCoordenador = function (req, res) {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            'UPDATE COORDENADOR SET nome=?, email=?, senha=?, curso=? WHERE matricula=?',
            [   req.body.nome,
                req.body.email,
                req.body.senha,
                req.body.curso,
                req.params.matricula,],
            (error, result, field) => {
                conn.release()
                if (error) { return res.status(500).send({ error: error }) }
                const response = {
                    mensagem: 'Coordenador atualizado com sucesso!',
                    coordenadorAtualizado: {
                        matricula: req.params.matricula,
                        nome: req.body.nome,
                        email: req.body.email,
                        senha: req.body.senha,
                        curso: req.body.curso,
                    }
                }
                res.status(202).send(response)
            }
        )
    })
}
*/