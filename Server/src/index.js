const http = require('http');
const data =require('./utils/data')

http
.createServer((request, response) =>
{
    response.setHeader('Access-Control-Allow-Origin', '*'); //?damos permisos al front end de que haga perticiones

    if(request.url.includes('/rickandmorty/character')){
    const id = request.url.split('/').at(-1)

    const characterFind = data.find((character) => {
        return character.id === +id //parseo de string a numero
        

    })
    return response.writeHead(200,{"Content-type":"application/json"})
    .end(JSON.stringify(characterFind))
}


})
.listen(3001)