import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();
const port = 9998;


// Use bodyParser middleware to parse incoming requests with JSON payloads
app.use(bodyParser.json());

app.use(cors());


// Secret key to sign JWT tokens
import { secretKey } from '../config.js';

// POST request to encrypt the "user" object
app.post('/encrypt', (req, res) => {
  const user = req.body.user;

  // Generate a JWT token with the "user" object as the payload
  const token = jwt.sign(user, secretKey);

  // Send the token back in the response
  res.json({ token });
});

// POST request to decrypt the "user" object
app.post('/decrypt', (req, res) => {
  const token = req.body.token;
  

  // Verify the JWT token and retrieve the payload (i.e., the "user" object)
  console.log(token);
  res.json({status: 'ok', user: {name: "hi"}})
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});