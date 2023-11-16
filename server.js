const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// set the environment variables
const PORT = process.env.PORT || 3001;
const app = express();

// use middleware to pares incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use the routes defined in the routes.js
app.use(routes);

// open the DB to the port 3001 and start server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
