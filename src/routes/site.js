const express = require('express');
const router = express.Router();


// Đối tượng thì ko cần viết hoa chữ cái đầu
const siteController = require('../app/controllers/SiteController');

//tuyến đường chọc vào đầu tiên
router.use("/search", siteController.search);
router.use("/", siteController.home);

module.exports = router; 