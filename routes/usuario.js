const express = require('express')
const router = express.Router()
const mysql = require('../mysql').pool
const crypto = require("crypto")

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

router.get('/',function(req, res){
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
         if((result.length > 0) && (result[0].ATIVO == "N" )){
             return res.status(200).send({mensagem : 'Usuário bloqueado!'})
         }
         const response = {
            mensage : 'Acesso Permitido',
            ID : result[0].ID,
            Aitvo : result[0].ATIVO,
            Email : result[0].EMAIL,
            Senha : criptografar(result[0].SENHA)
         }
         return res.status(200).send(response)
     }
     )
 })

})

module.exports = router;