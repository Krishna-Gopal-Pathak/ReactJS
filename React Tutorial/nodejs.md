## What is javascript Engine?
- Javascript Engine is a program that converts code written in javascript to something that computer processor undertands.


## v8 engine?
- The V8 engine is an open-source JavaScript engine developed by Google. It's used in web browsers like Google Chrome to execute JavaScript   code and make web pages interactive. In simple terms, it's the "heart" of a web browser that runs JavaScript code to make websites work.

## EcmaScript?
- It defines the rules and features that make JavaScript work consistently across different web browsers and environments. It's the   foundation of JavaScript, ensuring that code written in JavaScript behaves predictably and consistently.

## Modules?
- Modules are reusable block of code whose existence does not impact other code in any way.

## require()?
- require() is used to include modules from external files in Nodejs. for eg- require(path)


## module.exports in nodejs?
- It allows you to share functions, objects or variables b/w different files or modules within your nodejs project. 

## Eventloop in nodejs?
- The event loop in Node.js is like a traffic cop for handling asynchronous tasks. It manages and schedules tasks efficiently so that your   Node.js application can perform many operations simultaneously without getting blocked.

## Create a simple Node.js server that returns "Hello, World!"?
```bash
const http = require('http');
const server = http.createServer((req, res) => {                        // Create an HTTP server
  res.writeHead(200, { 'Content-Type': 'text/plain' });                 // Set the response headers
  res.end('Hello, World!\n');                                           // Send "Hello, World!" as the response
});
const port = 3000;                                                      // Listen on port 3000
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});

```

## Events in nodejs?
## Is nodejs is single threaded?
## Callback

## Asynchronous API in nodejs?
- An asynchronous API in Node.js is a web service that handles requests and responses in a non-blocking way, allowing multiple operations   to be executed concurrently without blocking the   main thread. It typically uses features like callbacks, Promises, or async/await to   manage asynchronous operations efficiently, making it suitable for tasks like database queries, file   I/O, and network requests.

## REPL in nodejs
- A REPL (Read-Eval-Print Loop) in Node.js is an interactive command-line tool that allows you to enter JavaScript code, which is then   executed, and the result is immediately displayed.   It's a simple way to experiment with and test JavaScript code in real-time.

## uninstall a dependency using npm?
- npm uninstall <dependency name>

## Blocking Code?
- If application has to wait for some I/O operation in order to complete its execution any further then the code responsible for waiting is   known as blocking code.

## How Node prevents blocking?
- By providing callback function
- Callback function gets called whenever corresponding event triggered.

## event emitter in nodejs?
- In Node.js, the EventEmitter is a built-in module that allows objects to emit events and handle them using event listeners. It enables   event-driven programming, where you can respond to events when they occur, making it a powerful tool for building asynchronous and   event-based applications.

## Buffer class?
- Buffer Class is a global class and can be accessed in application without importing buffer module.

## Piping in Nodejs?
- Piping is a machanism to connect output of one stream to another stream.

## How many way to send data in API nodejs?
- HTTP Methods (GET, POST, PUT, DELETE)
  - GET: Used to retrieve data from the server. Data can be sent as query parameters in the URL.
  - POST: Used to send data to the server, typically for creating or updating resources. Data is sent in the request body as JSON, form           data, or other formats.
  - PUT: Used to update an existing resource on the server. Data is typically sent in the request body.
  - DELETE: Used to request the removal of a resource on the server.

- HTTP Headers: Data can be sent and received in HTTP headers. For example, you can send authentication tokens or API keys in headers for                 secure access to your API.

- Request Body: Data can be sent in the request body as JSON, XML, form data, or other formats. The server can parse the request body to                 extract and process the data.

- URL Parameters: Data can be sent as URL parameters in the path of the URL. This is common for GET requests, where you specify parameters                   like /api/resource?id=123.

- Query Parameters: For GET requests, data can be sent as query parameters in the URL, e.g., /api/resource?param1=value1&param2=value2. The                     server can parse these parameters to perform filtering or sorting.

- Cookies: Data can be stored and sent in cookies. Cookies are commonly used for maintaining session state or user authentication.

- WebSockets: WebSockets enable bidirectional communication between the client and server. Data can be sent and received in real-time over               a single, long-lived connection.

- File Uploads: When dealing with file uploads, data is sent as multipart/form-data in the request body. Libraries like multer in Node.js                 simplify handling file uploads.

- Response Body: Data is typically sent from the server to the client in the response body. This can be in the form of JSON, HTML, XML, or                  other content types.

- HTTP Status Codes: Status codes (e.g., 200, 404, 500) can be used to convey information about the outcome of the request, such as                      success, not found, or server error.


## Multer
- Multer is a popular middleware for handling file uploads in Node.js applications. It's commonly used with Express.js, a web application   framework for Node.js, to simplify the process of receiving and storing files uploaded by clients (e.g., through a web form). Multer   provides a flexible and easy-to-use solution for file handling.


## What is api Endpoint?
- An API (Application Programming Interface) endpoint is a specific URL or URI (Uniform Resource Identifier) where an API can be accessed.   It defines a point of interaction between a client (which could be a web application, a mobile app, or another service) and a server that   hosts the API.

       




