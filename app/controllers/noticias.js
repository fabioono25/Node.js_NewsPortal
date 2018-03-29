module.exports.noticias = (application, req, res) => {
    const connection = application.config.dbConnection()
    //const noticiasModel = app.config.noticiasModel
    //const noticiasModel = application.app.models.noticiasModel
    const noticiasModel = new application.app.models.NoticiasDAO(connection)

    //noticiasModel.getNoticias(connection, callback)
    noticiasModel.getNoticias((error, result) => 
        res.render("noticias/noticias", {noticias: result}))
}

module.exports.noticia = (application, req, res) => {
    const connection = application.config.dbConnection()
    const noticiasModel = new application.app.models.NoticiasDAO(connection)

    const id_noticia = req.query
    
    noticiasModel.getNoticia(id_noticia, (error, result) => 
        
        res.render("noticias/noticia", {noticia: result}))
}