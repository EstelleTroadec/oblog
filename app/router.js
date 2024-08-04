// import express
const express =  require('express');
// instance the router
const router = express.Router();

const controller = require('./controller');

router.get('/', controller.homePage);
router.get('/article/:id', controller.articlePage);



// and we export the router
module.exports = router;

