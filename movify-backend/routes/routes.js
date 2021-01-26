// Load the MySQL pool connection
const pool = require('../db/config')

// Display all movies
app.get('/movies', (request, response) => {
    pool.query(
        "SELECT mov.title AS 'title', mov.picture_url AS 'picture', cat.name AS 'category' FROM movie AS mov JOIN movie_category AS mov_cat ON (mov.id = mov_cat.movie_id) JOIN category AS cat ON (cat.id = mov_cat.category_id) ORDER BY cat.name", 
    (error, result) => {
        if (error) throw error
        response.setHeader("Access-Control-Allow-Origin", "*")
        response.send(result)
    })
})

//Insert a movie
app.post('/create_movie', (request, response) => {
    console.log(request);
    pool.query('INSERT INTO movie(picture_url, title, description, duration, trailer_url, release_date) VALUES (?,?,?,?,?,?)',
    request.body.picture,
    request.body.title,
    request.body.description,
    request.body.duration,
    request.body.trailer,
    request.body.date,
    (error, result) => {
        if (error) throw error;
        response.setHeader("Access-Control-Allow-Origin", "*")
        response.status(201).send(`Movie added with ID: ${result.insertId}`);
    })
})

// New movies
app.get('/news', (request, response) => {
    pool.query(
        "SELECT mov.title AS 'title', mov.picture_url AS 'picture', cat.name AS 'category' FROM movie AS mov JOIN movie_category AS mov_cat ON (mov.id = mov_cat.movie_id) JOIN category AS cat ON (cat.id = mov_cat.category_id) WHERE FLOOR(DATEDIFF(CURDATE(), mov.release_date)/7) < 3 ORDER BY cat.name", 
    (error, result) => {
        if (error) throw error
        response.setHeader("Access-Control-Allow-Origin", "*")
        response.send(result)
    })
})


