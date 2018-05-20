// Imports
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
// Variables
const port = process.env.PORT || 3000;
var app = express();
//Code
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method}, ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log.');
        }
    });
    next();
});
app.use(express.static(__dirname + '/public'));
// app.use(function(req, res) {
// res.send("404: Page not Found", 404);
// });

// // Handle 500
// app.use(function(error, req, res, next) {
// res.send("500: Internal Server Error", 500);
// });
hbs.registerHelper('currentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('currentDay', () => {
    return new Date().toString();
});
app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: "Home",
        message: "Welcome"
    })
})
var links = ['about', 'code', 'links']
var titles = ["About", "Code Editor", "Useful Links"]
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About',
    });
})

app.get('/code',(req, res) => {
  res.render('code.hbs',{
    name:'Code Editor'
  });
});
app.get('/links',(req, res) => {
  res.render('links.hbs',{
    pageTitle:'Useful Links'
  })
})
// for (var i = 0; i < links.length; i++) {
//     app.get(`/${links[i]}`, (req, res) => {
//         res.render(`${links[i]}.hbs`, {
//             name: 'Code Editor'
//         });
//     });
// }
// Setting it to port 3000 or whatever port it is.
app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});
// End of Code
