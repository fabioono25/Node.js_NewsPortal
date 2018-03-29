const mysql = require('mysql')

//com consign, nao queremos criar uma conexao a cada inicializacao da aplicacao
//50 requisicoes = 50 criacoes no MySql
//precisamos criar um wrapper, para evitar essas criacoes
const connMySql = () => {
    console.log('conexao estabelecida')

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    })
}

module.exports = () => { 

    console.log('o autoload carregou o modulo de conexao com o bd')
    
    return connMySql 
}

    // console.log('conexao estabelecida')

    // mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '1234',
    //     database: 'portal_noticias'
    // })