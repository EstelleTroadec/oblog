// impotr express
const express = require('express');

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

// send the HTML file to the browser
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/integration/index.html');
});

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});

