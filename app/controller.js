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
    },

    // methode to render the category page
    categoryPage: (req, res) => {
        // get the category name from the request parameters
        const category = req.params.name;
        // find the articles with the matching category
        const foundArticles = articles.filter(article => article.category === category);
        // render the list of articles for the matching category
        res.render('articlesList', {articles: foundArticles, category});
    }

}

// export the controller
module.exports = controller;