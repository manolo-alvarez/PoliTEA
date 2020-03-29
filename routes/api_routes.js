//api_routes.js file
const express = require('express');
const postcontroller = require('../controller/post_controller');
const router = express.Router();

router.get('/',postcontroller.showIndex)

router.get('/politicians/Senators', postcontroller.showAllSenators);

router.get('/politicians/Congressman', postcontroller.showAllCongressman);

router.get('/politicians/:id', postcontroller.showPolitician);

router.get('/votes/:id', postcontroller.showVotes);

router.get('/donors/:id', postcontroller.showDonors);

router.get('/industries/:id', postcontroller.showIndustries);

router.get('/finances/:id', postcontroller.showFinances);

router.get('/assets/:id', postcontroller.showAssets)

module.exports = router;
