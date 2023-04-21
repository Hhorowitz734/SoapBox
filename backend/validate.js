import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import admin from 'firebase-admin'

const app = express();
const port = 9998;


// Use bodyParser middleware to parse incoming requests with JSON payloads
app.use(bodyParser.json({ limit: '10mb' }));

app.use(cors());


// Secret key to sign JWT tokens
import { secretKey } from '../config.js';

// POST request to decrypt the "user" object
app.post('/decrypt', async (req, res) => {
  const token = req.body.token;
  
  const user = jwt.verify(token, secretKey);

  res.json({ status: 'ok', user: user});
});

app.post('/encrypt', async (req, res) => {

  const user = req.body;

  const token = jwt.sign(user, secretKey);

  res.json({status: 'ok', token: token})

})

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});