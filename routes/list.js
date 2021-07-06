const express = require('express');

const listController = require('../controllers/list');

const router = express.Router();

router.get('/', listController.getIndex);

module.exports = router;
