import express from 'express';

import router from './routes'; 

const port = 3333;

const server = express();

server.use(express.json());
server.use(router);

server.listen(port, () => {
    console.log("SERVIDOR NO AR!!")
})