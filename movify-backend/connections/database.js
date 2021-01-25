function getMovies() {
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
    host     : 'id16006434_movify_db',
    user     : 'id16006434_gblanco',
    password : 'OV~?V#2$y!&xW[*#',
    database : 'id16006434_movify_db'
    });
    
    connection.connect();
    
    connection.query('SELECT * FROM movie', function (error, results, fields) {
        return results;
    });
    
    connection.end();
}