const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// Load the protobuf
const PROTO_PATH = path.join(__dirname, 'greeting.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
const greetingProto = grpc.loadPackageDefinition(packageDefinition).greeting;

// Implement the Greet service
function greet(call, callback) {
    const name = call.request.name;
    callback(null, { message: `Hello, ${name}!` });
}

// Start the gRPC server
function startServer() {
    const server = new grpc.Server();
    server.addService(greetingProto.GreetService.service, { greet });
    const address = '0.0.0.0:50051';
    server.bindAsync(address, grpc.ServerCredentials.createInsecure(), () => {
        console.log(`Server running at ${address}`);
        server.start();
    });
}

startServer();
