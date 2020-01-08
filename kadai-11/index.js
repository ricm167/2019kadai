const http = require('http')
const server = http.createServer((request,response) => {
//CORS ヘッダーを返す
    response.setHeader('Access-Control-Allow-Origin','*') 　　　    
    response.write('Hello');
    response.end();   
})
server.listen(4000)
console.log("The server is listening...")