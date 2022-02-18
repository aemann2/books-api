import { Request, Response } from 'express';

const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });
const db = require('./config/db');

const app = express();
app.use(cors());
const PORT: String | Number = process.env.PORT || 5000;

db();

app.get('/', (req: Request, res: Response) => {
	res.send('Hello world!');
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
