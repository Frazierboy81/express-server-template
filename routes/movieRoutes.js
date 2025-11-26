const express = require('express');
const { getMoviesById, getAllMovies } = require('../controllers/movieController')

const movieRoutes = express.Router();


// Routes

movieRoutes.get('/', getAllMovies)

movieRoutes.get('/search', (req, res) => {
    res.send('Searching ...')
})

movieRoutes.get('/:id', getMoviesById)

module.export = movieRoutes