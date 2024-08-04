// import data 
const articles = require('../data/articles.json');

const controller = {
    // methode to render the homepage
    homePage: (req, res) => {
        // render the ejs articlesList view
        res.render('articlesList', {articles: articles});
    },

    // methode to render the article page
    articlePage: (req, res) => {
        // get the article id from the request parameters
        const articleID = req.params.id;
        // find the article with the matching id (with parseInt to make sure we get an 'integer')
        const foundArticle = articles.find(article => article.id === parseInt(articleID));
        // render the ejs article view
        res.render('article', {article: foundArticle});
    }

}

// export the controller
module.exports = controller;