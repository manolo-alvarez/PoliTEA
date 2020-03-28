//api_routes.js file
const express = require('express');
const postcontroller = require('../controller/post_controller');
const router = express.Router();

router.get('/',postcontroller.showIndex)

router.get('/events/zip/:id', postcontroller.showZipCodeEvents);

router.get('/events/city/:id', postcontroller.showCityEvents);

router.get('/events/state/:id', postcontroller.showStateEvents);

// router.get('/finances/:id', postcontroller.showFinances);

// router.get('/assets/:id', postcontroller.showAssets)

module.exports = router;