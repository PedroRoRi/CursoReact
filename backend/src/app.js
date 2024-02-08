const express = require('express');
const app = express();
const cors = require('cors');


//configuracion
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(express.json());

//rutas
app.get('/api/users', (req, res) => res.send('User Routes'));
app.get('/api/notes', (req, res) => res.send('Notes Routes'));

module.exports = app;