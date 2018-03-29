//const dbConnection = require('../../config/dbConnection')

module.exports = (application) => {

    /*
    SEM CONSIGN

    const connection = dbConnection()

    app.get('/noticias', (req, res) =>

        connection.query('select * from noticias', function(error, result){
            //res.send(result)
            res.render("noticias/noticias", {noticias: result})
        })

        //res.render("noticias/noticias")
    )*/

    // app.get('/noticias', (req, res) => {
    //     //res.send("<html><body>tecnologia</body></html>")
    //     res.render("noticias/noticias");
    // })

    //com consign
    
    application.get('/noticias', (req, res) => {

        // const connection = application.config.dbConnection()
        // //const noticiasModel = app.config.noticiasModel
        // //const noticiasModel = application.app.models.noticiasModel
        // const noticiasModel = new application.app.models.NoticiasDAO(connection)

        // //noticiasModel.getNoticias(connection, callback)
        // noticiasModel.getNoticias((error, result) => 
        //     res.render("noticias/noticias", {noticias: result}))
        application.app.controllers.noticias.noticias(application, req, res)
    })

    application.get('/noticia', (req, res) => 
    {
        // const connection = application.config.dbConnection()
        // const noticiasModel = new application.app.models.NoticiasDAO(connection)

        // noticiasModel.getNoticia((error, result) => 
            
        //     res.render("noticias/noticia", {noticia: result}))
        
        //const id_noticia = req.query

        application.app.controllers.noticias.noticia(application, req, res)
    })
}