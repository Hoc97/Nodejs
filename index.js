//1. Server side rendering => lượt truy cập đầu sẽ nhanh, tốt cho sale
//2. Client side rendering => cần phải giao tiếp với API
const express = require('express');
const app = express();
const port = 3000;
// route
app.get('/', (req, res) => {
    return res.send('Hello Worlds');
});


//127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});