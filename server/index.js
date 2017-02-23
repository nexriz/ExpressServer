import express from 'express';
import mongoose from 'mongoose';
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

// Connecting mongoDB
import { createUser, findUser } from './models/usermodel';
const db = mongoose.connection;
mongoose.connect('mongodb://localhost/test');
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('MongoDB connected!'));

createUser({ name: 'jens', password: 'op'})
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