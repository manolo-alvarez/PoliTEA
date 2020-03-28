//api_routes.js file
const express = require('express');
const postcontroller = require('../controller/post_controller');
const router = express.Router();

router.get('/', postcontroller.showIndex);
router.post('/add-post', postcontroller.addPost);
router.get('/posts', postcontroller.showPost);

module.exports = router;