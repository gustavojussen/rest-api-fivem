const http = require('http');
const app = require('./app')
const port = process.env.PORT || 3000
const server = http.createServer(app)

server.listen(port, () => {
    console.log(`[+] Api inicializada com sucesso na porta ${port}!` ,
        ` 
   ____  _  __
  / __ \\| |/ /
 | |  | | ' / 
 | |  | |  <  
 | |__| | . \\ 
  \\____/|_|\\_\\
`
    )
})