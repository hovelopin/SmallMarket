import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { config } from './config.js';

const app = express();

app.use(express.json()); // using json for http
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());

app.use((error, request, response, next) => { // catch server error
    console.error(error);
    response.sendStatus(500);
});

const server = app.listen(config.host.port);