//api_routes.js file
const express = require('express');
const postcontroller = require('../controller/post_controller');
const router = express.Router();

router.get('/',postcontroller.showIndex)

router.get('/politician/:id', postcontroller.showPolitician);

router.get('/donors/:id', postcontroller.showDonors);

router.get('/industries/:id', postcontroller.showIndustries);

router.get('/finances/:id', postcontroller.showFinances);

router.get('/assets/:id', postcontroller.showAssets)

module.exports = router;
