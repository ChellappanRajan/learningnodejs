const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req);
    // process.exit();

    if(req.url == "/"){
        // res.write(`
        // <html>
        // <body>
        // <h1>Hello</h1>
        // </body>
        // </html>
        // `);
        res.statusCode = 302;
        res.setHeader('Location', '/url');
        return res.end();
    }
    if(req.url === 'url'){
        console.log(1);
        res.write(`
        <html>
        <body>
        <h1>Hello</h1>
        </body>
        </html>
        `);
        return res.end();
    }
});

server.listen(3000);
