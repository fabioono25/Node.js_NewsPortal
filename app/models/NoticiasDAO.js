//colocando um design: Data Access Object - com orientação a objetos
function NoticiasDAO(connection){
    this._connection = connection
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query('select * from noticias order by data_criacao desc', callback)
}

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
    
    this._connection.query("select * from noticias where id_noticia = " + id_noticia.id_noticia, callback)
}

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback){
    this._connection.query("insert into noticias set ? ", noticia, callback)
}

NoticiasDAO.prototype.getFiveLastNews = function(callback){
    this._connection.query("select * from noticias order by data_criacao desc limit 5", callback)
}

module.exports = () => NoticiasDAO

//{   
    //modelo antigo
    // this.getNoticias = (connection, callback) => 
    //     connection.query('select * from noticias', callback)

    // this.getNoticia = (connection, callback) => 
    //     connection.query("select * from noticias where id_noticia = 1", callback)

    // this.salvarNoticia = (noticia, connection, callback) => 
    //     connection.query("insert into noticias set ? ", noticia, callback)

    // return this
//}