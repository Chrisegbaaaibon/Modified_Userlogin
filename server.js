const express = require('express');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const morgan = require('morgan');
const route = require('./routes/router');
const DB = require('./database/connection');

const app = express();

DB();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded());
app.use(cookieParser());
app.use(morgan('tiny'));
 
app.use(express.static(__dirname + '/views'));
app.use(route)
app.listen(2000, ()=>{
   console.log(`Server is running on http://localhost:2000`)
});
