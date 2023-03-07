const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const port  = 3000 ;
const app = express();

app.use(express.static(path.join(__dirname , 'static')));

//Express Handlebars Configurations
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use( '/' , require( path.join(__dirname , './routes/blogs')));

app.listen(port , ()=>{
    console.log(`Blog app listening at http://localhost:${port}`);
})