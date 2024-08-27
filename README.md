# Node.js Proxy Server

This is a Node.js application that acts as a proxy server, forwarding all incoming API requests to another URL and returning the information from there. The application is built using Express and Axios, and includes CORS support for all routes.

## Requirements

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Install the dependencies
```
npm install
```

## Configuration

You need to set your target URL and port in the configuration. Create `.env` and set the following lines:

- Set your target URL:
```
TARGET_URL=https://api.example.com
```

- Set your desired port:
```
PORT=3000
```

## Running the Application

Start the server by running:
```
node proxy
```

The server will start on the port specified in the configuration and forward all incoming requests to the target URL.

## Working

- The server receives an incoming request.
- It forwards the request to the specified target URL.
- The response from the target URL is sent back to the client.
- CORS is enabled for all routes.

## Example Request

Assuming the server is running on port 3000, and your target URL is `https://api.example.com`, if you make a request to:
```
http://localhost:3000/some-endpoint
```
The server will forward the request to:
```
https://api.example.com/some-endpoint
```
And return the response from `https://api.example.com/some-endpoint` to the client.

## Dependencies

- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [axios](https://www.npmjs.com/package/axios): Promise based HTTP client for the browser and node.js.
- [cors](https://www.npmjs.com/package/cors): Node.js CORS middleware.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.