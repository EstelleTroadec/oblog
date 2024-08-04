// import express
const express =  require('express');
// instance the router
const router = express.Router();
// import data 
const articles = require('../data/articles.json');


// path for the homepage
router.get('/', (req, res) => {
    // render the ejs articlesList view
    res.render('articlesList', {
        articles: articles
    });
});

// path for the article page
router.get('/article/:id', (req, res) => {
    // get the article id from the request parameters
    const articleID = req.params.id;
    // find the article with the matching id (with parseInt to make sure we get an 'integer')
    const foundArticle = articles.find(article => article.id === parseInt(articleID));

    // render the ejs article view
    res.render('article', { article: foundArticle});

})

// and we export the router
module.exports = router;

