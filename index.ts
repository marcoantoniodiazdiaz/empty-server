import Server from './classes/server';
import router from './routes/router';
// 
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

// Rutas hijas
const server = Server.instance;

// BodyParser 
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// CORS
server.app.use(cors({ origin: true, credentials: true }));

server.app.use('/', (express.static('public', { redirect: false })));

// Rutas de servicios
server.app.use('/api', router);

server.start(() => {
    console.log(`✅  Server online in port ${server.port}`);
});


