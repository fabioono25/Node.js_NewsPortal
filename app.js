const app = require('./config/server')

// const rotaNoticias = require('./app/routes/noticias')(app)
// const rotaHome = require('./app/routes/home')(app)
// const rotaInclusaoNoticias = require('./app/routes/formulario_inclusao_notica')(app)

//sem consign para controle de rotas (para cada novo item, precisa criar uma linha nova)
// require('./app/routes/noticias')(app)
// require('./app/routes/home')(app)
// require('./app/routes/formulario_inclusao_notica')(app)

const msg = require('./mod_teste')()

app.listen(3000, () => {
    console.log(msg)
});