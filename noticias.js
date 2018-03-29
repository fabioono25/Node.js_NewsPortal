const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer( (req, res) => {

    // res.statusCode = 200
    // res.setHeader('Content-Type', 'text/json')
    // res.end('{"valor": 123123}')

    const categoria = req.url

    switch (categoria){
        case "/moda":
            res.end("<html><body>moda</body></html>")
            break

        case "/tecnologia":
            res.end("<html><body>tecnologia</body></html>")
            break            

        default:
            res.end("<html><body>rota padrao</body></html>")
            break
    }
})

//server.listen(3000)
server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`)
})