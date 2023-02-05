//1. Server side rendering => lượt truy cập đầu sẽ nhanh, tốt cho sale
//2. Client side rendering => cần phải giao tiếp với API
const path = require('path');
const { engine } = require('express-handlebars');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

// với những file static sẽ cấu hình trong thư mục public này
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});


//127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});