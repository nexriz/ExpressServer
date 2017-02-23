import express from 'express';
import ch from 'chalk';

const app = express();

app.get('/', (req, res) => {
	res.send('heej')
})

app.listen(3000, () => {
	console.log(ch.blue('Server is running on port ') + ch.white('3000'));
})