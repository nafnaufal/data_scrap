const express = require('express')
const page_controller = require('./controller/page_controller')
const router = express.Router();

router.get('/', page_controller.index)

module.exports = router;