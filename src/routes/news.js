const express = require('express');
const router = express.Router();


// Đối tượng thì ko cần viết hoa chữ cái đầu
const newsController = require('../app/controllers/NewsController');

//tuyến đường chọc vào đầu tiên
router.use("/:slug", newsController.show);
router.use("/", newsController.index);

module.exports = router;