const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

function sendFile(res) {
    return function(path, contentType) {
        fs.readFile(path, function (err, content) {
            if (err && err.code !== 'ENOENT') {
                res.writeHeader(404, {"Content-Type": "application/json"});  
                res.write(JSON.stringify(
                    {
                        path: req.url,
                        err: 'Not Found',
                    }
                , null, 4));  
                res.end();
                return;
            } else if(err) {
                res.writeHeader(500, {"Content-Type": "application/json"});  
                res.write(JSON.stringify(
                    {
                        path,
                        err,
                    }
                , null, 4));  
                res.end();
                return;
            }
            
            res.writeHeader(200, {"Content-Type": contentType});  
            res.write(content);  
            res.end();  
        });
    }
}

function serverHandler(req, res) {
    const send = sendFile(res);

    if(req.url === '' || req.url === '/' || req.url === '/index.html') {
        return send('./index.html', 'text/html');
    }

    if(req.url === '/demon-slayers' || req.url === '/pagina-selecao.html') {
        return send('./pagina-selecao.html', 'text/html');
    }

    if(req.url === '/demons' || req.url === '/pagina-selecao-demon.html') {
        return send('./pagina-selecao-demon.html', 'text/html');
    }

    if(req.url === '/db/characters') {
        return send('./old-scripts/character-db.json', 'text/html');
    }
    
    if(req.url.match(/\.css$/g)) {
        return send(`.${req.url}`, 'text/css');
    }

    const imagesMatch = req.url.match(/\.(png|jpg)$/g);
    if(imagesMatch) {
        return send(`.${req.url}`, `image/${imagesMatch[0]}`);
    }

    return send(`.${req.url}`, '*/*');
}

function serverRunnerCallback() {
    console.log(`Server running at http://${hostname}:${port}/`);
}


const server = http.createServer(serverHandler);
server.listen(port, hostname, serverRunnerCallback);