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

// Create the client
function main() {
    const client = new greetingProto.GreetService('localhost:50051', grpc.credentials.createInsecure());

    const userName = 'Asim Sk';
    client.greet({ name: userName }, (error, response) => {
        if (!error) {
            console.log('Greeting:', response.message);
        } else {
            console.error(error);
        }
    });
}

main();
