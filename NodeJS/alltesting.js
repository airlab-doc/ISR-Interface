const http = require('http');
const url = require('url');

http.createServer(function(req, res) {
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Feel free to add query parameters to the end of the url');
}).listen(8080);



// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
// var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
// console.log(q.host);
// console.log(' ');
// console.log('pathname');
// console.log(q.pathname);
// console.log(' ');
// console.log('search');
// console.log(q.search);



// http.createServer(function(req, res) {
//     // var q = url.parse(req.url, true);
//     // console.log(q);
//     // if (q.pathname == "/" && req.method === "GET") {
//     //     // ambil parameter dari URL
//     //     var keyword = q.query.keyword;

//     //     if (keyword) {
//     //         // Ambil data dari form dengan metode GET
//     //         res.writeHead(200, { 'Content-Type': 'text/html' });
//     //     }
//     // }
//     const queryObject = url.parse(req.url, true).query;
//     console.log(queryObject);
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Feel free to add query parameters to the end of the url');
// }).listen(8080);