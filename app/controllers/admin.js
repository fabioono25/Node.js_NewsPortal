module.exports.formulario_inclusao_noticia = (application, req, res) => {
    res.render("admin/form_add_noticia",{validacao:{}, noticia:{}});
}
 
module.exports.noticias_salvar = (application, req, res) => {
    const noticia = req.body;
    //res.send(req.body);

    //utilizando validacao
    req.assert('titulo','Título é obrigatorio').notEmpty()
    req.assert('resumo','Resumo é obrigatorio').notEmpty()
    req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100)
    req.assert('autor','Autor é obrigatorio').notEmpty()
    //req.assert('data_noticia','Data é obrigatoria').notEmpty().isDate({format: 'YYYY-MM-DD'})
    req.assert('noticia','Noticia é obrigatorio').notEmpty()

    const erros = req.validationErrors()

    if (erros){
        res.render("admin/form_add_noticia", {validacao: erros, noticia: noticia});
        return;
    }

    //conexao
    const connection = application.config.dbConnection()
    //model
    const noticiasModel = new application.app.models.NoticiasDAO(connection)
    //salvarNoticia
    
    //noticiasModel.getNoticias(connection, callback)
    noticiasModel.salvarNoticia(noticia, function (error, result){
        //res.setHeader("Content-Type", "text/html")
        res.redirect('/noticias')// erro de can't set headers after they are sent to the client
        //res.render("noticias/noticias", {noticias: result})
        //return res.status(200).json(noticia);
        //window.location.href = '/noticias'
    })
}