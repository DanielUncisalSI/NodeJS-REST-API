//importando MYSQL
const mysql = require('mysql');

//criando connexão com o banco
var pool = mysql.createPool({
"user" : "ubtlogistica8",
"password" : "Nma55171", 
"database" : "ubtlogistica8",
"host" : "mysql.db5.net2.com.br"
})

//variavel de ambiente criado na aula 8

exports.pool = pool