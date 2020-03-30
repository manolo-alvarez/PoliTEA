//api_routes.js file
const express = require('express');
const postcontroller = require('../controller/post_controller');
<<<<<<< HEAD
=======

>>>>>>> master
const router = express.Router();

router.get('/',postcontroller.showIndex)

<<<<<<< HEAD
router.get('/politician/:id', postcontroller.showPolitician);
=======
router.get('/politicians/Senators', postcontroller.showAllSenators);

router.get('/politicians/Congressman', postcontroller.showAllCongressman);

router.get('/politicians/:id', postcontroller.showPolitician);

router.get('/votes/:id', postcontroller.showVotes);
>>>>>>> master

router.get('/donors/:id', postcontroller.showDonors);

router.get('/industries/:id', postcontroller.showIndustries);

router.get('/finances/:id', postcontroller.showFinances);

router.get('/assets/:id', postcontroller.showAssets)

<<<<<<< HEAD
=======
router.get('/events/zip/:id', postcontroller.showZipCodeEvents);

router.get('/events/city/:id', postcontroller.showCityEvents);

router.get('/events/state/:id', postcontroller.showStateEvents);

router.get('/events/stateAbbr/:id', postcontroller.showStateAbbrEvents);

>>>>>>> master
module.exports = router;
