
module.exports = (application) => {
    application.get('/', (req, res) => {
        //res.send("<html><body>rota padrao</body></html>")
        //res.render('home/index')
        application.app.controllers.home.index(application, req, res) 
    })
}