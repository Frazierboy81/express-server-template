const express = require('express');

const movieRoutes = express.Router();


// Routes

movieRoutes.get('/', (req, res) => {
    res.send('Sendind all movies...')
})

movieRoutes.get('/search', (req, res) => {
    res.send('Searching ...')
})

movieRoutes.get('/:id', (req, res) => {
    res.send(`Data for movie: ${req.params.id}`)
})

module.export = movieRoutes