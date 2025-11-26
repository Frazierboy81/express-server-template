function getAllMovies(req, res) {
    res.send("Sent all movies..")
}
function getMoviesById(req, res) {
    res.send(`Movie info: ${req.params.id}`)
}

module.exports = {
    getAllMovies,
    getMoviesById,
};