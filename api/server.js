const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.get('/api/classes', (req, res) => {
    db('classes')
    .then(users => {
      res.json(users);
    }) 
    .catch (err => {
      res.status(500).json({ message: 'Failed to get classes' });
    });
});


module.exports = server;
