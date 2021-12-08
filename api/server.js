const express = require("express")
const carsRouter = require('./cars/cars-router');

const server = express()

// DO YOUR MAGIC
server.use(express.json());
//server.use('/api/cars', carsRouter)

server.use('*', (req, res) => {
    // catch all 404 errors middleware
    res.status(404).json({ message: ` not found!` });
  });
  
module.exports = server
