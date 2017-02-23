import express from 'express';
import ch from 'chalk';

import config from './config';
const { PORT } = config;

import routes from './routes'

const app = express();

app.use(routes)
app.get('/', (req, res) => {
	res.send('heej')
})

app.listen(PORT, () => {
	console.log(ch.blue('Server is running on port ') + ch.white(PORT));
})