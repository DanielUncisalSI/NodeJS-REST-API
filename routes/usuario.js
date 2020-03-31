const express = require('express')
const router = express.Router()
const mysql = require('../mysql').pool
const bcrypt = require('bcrypt')

/*const crypto = require("crypto")
const DADOS_CRIPTOGRAFAR = {
    algoritmo : "aes256",
    segredo : "chaves",
    tipo : "hex"
}

 function criptografar(senha){
    const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo)
    cipher.update(senha)
    return cipher.final(DADOS_CRIPTOGRAFAR.tipo)
}
*/
//cadastrar usuario
router.post('/cadastro',function(req, res){
    mysql.getConnection(function(error, conn){
        if(error){ return res.status(500).send({erro : error})}
        conn.query('SELECT * FROM USUARIOS WHERE email = ?',
        [req.body.email],
        function(error, result){
            if(error){ return res.status(500).send({error : error})}
            if(result.length>0){
                res.status(409).send({ mensagem: 'Usuário já cadastrado' })
            }else{
                bcrypt.hash(req.body.senha, 10, function(errBcrypt, hash){
                    if(errBcrypt){ return res.status(500).send({error : errBcrypt})}
                    conn.query('INSERT INTO USUARIOS (email, senha) VALUES (?, ?)',
                    [req.body.email, hash],
                    function(error, result){
                        conn.release()
                        if(error){ return res.status(500).send({error : error})}
                        var response = {
                            mensagem: 'Usuário criado com sucesso!',
                            usuarioCriado:{
                                id_usuario: result.insertId,
                                email: req.body.email
                            }
                        }
                        return res.status(201).send({response})
                    })
                })
            }
        })    
    })
}) 


//login usuario
router.get('/loginIncomplet',function(req, res){
 mysql.getConnection(function(error, conn){
     if(error){ return res.status(500).send({erro : error})}
     conn.query('SELECT * FROM USUARIOS WHERE EMAIL = ? AND SENHA = ? ',
     [req.body.email, req.body.senha],
     function(error, result){
         
        conn.release()
         if(error){ return res.status(500).send({error :error})}
         if(result.length == 0){
             return res.status(404).send({mensagem: 'email ou usuário incorreto'})
         }
         if( result[0].ATIVO == "N" ){
             return res.status(200).send({mensagem : 'Usuário bloqueado!'})
         }
         const response = {
            mensage : 'Acesso Permitido',
            ID : result[0].ID,
            Aitvo : result[0].ATIVO,
            Email : result[0].EMAIL,
            Senha : result[0].SENHA
         }
         return res.status(200).send(response)
     }
     )
 })

})

router.post('/login',function(req, res){
  mysql.getConnection(function(error, conn){
     if(error){ return res.status(500).send({erro : error})}
     conn.query('SELECT * FROM USUARIOS WHERE EMAIL = ?', 
  [req.body.email],
  function(error, result){
  conn.release()
   if(error){ return res.status(500).send({error :error})}
   if(result.length < 1){
       return res.status(401).send({mensagem : "Falha na autorização"})
   }
   //compara se a senha criptografada é igual, pois não consegue discriptografar
   bcrypt.compare(req.body.senha, result[0].senha, function(err, result){
   if(err){return res.status(401).send({mensagem : "Falha na autorização"})}
   //se a senha estiver correta armazena no result
   if(result){return res.status(200).send({mensagem: "Autenticado com sucesso!"})} 
   return res.status(401).send({mensagem : "Falha na autorização"})
})
  })
  })
  })



module.exports = router;