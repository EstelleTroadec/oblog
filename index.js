// impotr express
const express = require('express');

// import data
const articles = require('./data/articles.json');

// initialize express app (instance the HTTP server)
const app = express();

// declare the PORT and set it to 3000
const PORT = 3000;

//defne the template engine
app.set('view engine', 'ejs');

//define the path of the views folder
app.set('views', './app/views');
// another way to define it :
// app.set('views', __dirname + '/app/views');

// define the path of the static files
app.use(express.static('./static'));

app.get('/', (req, res) => {
    // render the ejs articlesList view
    res.render('articlesList', {
        articles: articles
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});

