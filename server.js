const http = require('http')
const url = require('url')

http.createServer((request, response) => {
    const queryData = url.parse(request.url, true).query

    const num1 = queryData.num1
    const num2 = queryData.num2

    if (num1 && num2) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({
            message: `Parâmetros recebidos: num1=${num1}, num2=${num2}, resultam na soma: ${num1+num2}`
        }))
    } else {
        response.writeHead(400, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify({
            error: 'Parâmetros "num1" e "num2" são obrigatórios.'
        }))
    }
}).listen(3000, () => {
    console.log('Server HTTP rodando em https://localhost:3000');
})