const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/item');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = router;
