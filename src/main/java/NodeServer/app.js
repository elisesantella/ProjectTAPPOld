//console.log('hello hello hello')

const fs = require('fs'); //fs object that contains info with methods & functions that we can call
const http = require('http')

//fs.writeFileSync('text.txt', 'Hello from inside a file'); //using a function form fs this creates a new text file text.txt

//Asynchronous meaning the creating file runs in the background
//Better way to do it
// function writeCallbackFunction() {
//   console.log('done')
// }
// fs.writeFile('text.txt', 'Hello from inside a file', writeCallbackFunction) //use fs function to create text.txt file add writing into it and then call the callback function

// console.log('hello')

//Same as above
// fs.writeFile('text.txt', 'Hello from inside a file', () =>{
//   console.log('done')
// }) //use fs function to create text.txt file add writing into it and then call the callback function

// console.log('hello')
function handleRequest(req, res) { //function with a request function and a respond function
  console.log('The URL is: ' + req.url)
  console.log('The request method is: ' + req.method)
  console.log('')
  console.log('')
  //console.log('The request header is: ' + JSON.stringify(req.headers)) //JSON.stringify converst it to a string

  if(req.url === '/page2') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Tab</title><head>');
    res.write('<body>This is /page2 <br><button>test button</button></body>');
    res.write('</html>');
    res.end() //ending request so browser doesn't hang
  }
  if(req.url === '/page1') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Tab</title><head>');
    res.write('<body>This is /page1 <br><button>test button</button></body>');
    res.write('</html>');
    res.end()
  }

}
const server = http.createServer(handleRequest)//creates a server and a request function



server.listen(8081)//listen to requests coming in






// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === '/') {
//     res.write('<html>');
//     res.write('<head><title>Enter Message</title><head>');
//     res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
//     res.write('</html>');
//     return res.end();
//   }
//   if (url === '/message' && method === 'POST') {
//     fs.writeFileSync('message.txt', 'DUMMY');
//     res.statusCode = 302;
//     res.setHeader('Location', '/');
//     return res.end();
//   }
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<html>');
//   res.write('<head><title>My First Page</title><head>');
//   res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//   res.write('</html>');
//   res.end();
// });

// server.listen(3000);
