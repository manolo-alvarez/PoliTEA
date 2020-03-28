//api_routes.js file
const express = require('express');
const postcontroller = require('../controller/post_controller');
const router = express.Router();

router.get('/',postcontroller.showIndex)



router.get('/politician/:id', postcontroller.showPolitician);





module.exports = router;
