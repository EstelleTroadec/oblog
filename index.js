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


// path for the homepage
app.get('/', (req, res) => {
    // render the ejs articlesList view
    res.render('articlesList', {
        articles: articles
    });
});

// path for the article page
app.get('/article/:id', (req, res) => {
    // get the article id from the request parameters
    const articleID = req.params.id;
    // find the article with the matching id (with parseInt to make sure we get an 'integer')
    const foundArticle = articles.find(article => article.id === parseInt(articleID));

    // render the ejs article view
    res.render('article', { article: foundArticle});

})

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});

