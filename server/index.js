import express from 'express';
//middleware imoprt
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import CORS from 'cors';
import log from 'morgan';
// color for terminal
import ch from 'chalk';
// config file /w stuff
import { PORT } from './config';
// Routes import
import routes from './routes'

// init server
const app = express();
console.log('Server is starting...');

//default middleware for server
app.use(CORS());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(log('dev'));

// All our routes
app.use('/', routes);


app.listen(PORT, () => console.log(ch.blue('Server is available on http://localhost:') + ch.red(PORT)));