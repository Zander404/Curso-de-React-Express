import express from 'express'

const app = express()
//criando rotas no express
app.get('/', (request, response) => {
    return response.send('Hello World')
 //No express podemos retorna vetores de objeto para o front através das rotas
}) 

app.listen(3333)
