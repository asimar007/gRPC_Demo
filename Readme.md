# Simple gRPC Example in JavaScript

This is a basic gRPC example built with Node.js to demonstrate how a client-server communication works using gRPC.

### Features:

- A simple `GreetService` that sends a greeting message to the client.
- Uses Protocol Buffers (`.proto`) for defining the service and messages.
- Demonstrates unary gRPC calls (one request, one response).

## Getting Started

### Prerequisites

- Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org).
- gRPC libraries (`@grpc/grpc-js`, `@grpc/proto-loader`) installed via npm.

### Installation

1. Clone this repository:

   ```
   git clone https://github.com/asimar007/gRPC_Demo.git
   cd grpc-example
   ```

#### Step 1: Start the gRPC Server

To start the gRPC server, run the following command:

`node server.js`

This will start the server on port `50051`. You should see the following message:

`Server running at 0.0.0.0:50051`

#### Step 2: Run the gRPC Client

Open another terminal and run the client:

`node client.js`

If everything is set up correctly, the client should send a request to the server and print the greeting message:

```
`Greeting: Hello, Asim Sk!`
```
