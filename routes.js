
const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    res.setHeader('Content-Type','text/html');
    if(url === '/'){
        res.write('<html><head><title>Some Name</title></head>');
        res.write(`
        <body>
            <form action='/message' method='POST'>
                <input type='text' name='message' />
                <button type='submit' name='submit'>Submit</button>
            </form>
        </body>`);
        res.write('</html>');
        return res.end();
    }
    else if(url === '/message' && req.method === 'POST'){
        fs.writeFileSync('message.txt', req);
        res.write('<html><head><title>Some Name</title></head>');
        res.write(`<body><h1>GOT IT</h1></body>`);
        res.write('</html>');
        res.statusCode = 302;
        
        return res.end();
    }
    else{
        res.write('<html><head><title>Some Name</title></head>');
        res.write(`<body><h1>NOT ALLOWED</h1></body>`);
        res.write('</html>');
        return res.end();
    }
}

module.exports = requestHandler;