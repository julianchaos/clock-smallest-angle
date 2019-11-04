const express = require('express');
const app = express();
const config = require('config');

app.use(require('./start/middleware'));
app.use(require('./start/router'));

const port = process.env.PORT | config.port;
app.listen(process.env.PORT | config.port, () => {
	console.log(`Listening on port ${port}`);
});
