module.exports.index = (application, req, res) => {
    
    const connection = application.config.dbConnection()
    const noticiasModel = new application.app.models.NoticiasDAO(connection)
    
    //recuperar as 5 ultimas noticias
    noticiasModel.getFiveLastNews((error, result) => {

        //res.render('home/index')
        res.render("home/index", {noticias: result})

    })
}