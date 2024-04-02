require('dotenv').config()


const server = require('./models/Server');

const Server = new server();


Server.listen();

