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

router.get('/events/zip/:id', postcontroller.showZipCodeEvents);

router.get('/events/city/:id', postcontroller.showCityEvents);

router.get('/events/state/:id', postcontroller.showStateEvents);

router.get('/events/stateAbbr/:id', postcontroller.showStateAbbrEvents);

//router.get('/bills/all', postcontroller.showAllBills);

router.get('/bills/:id', postcontroller.showBillsByTopic);

router.get('/industries', postcontroller.showIndustries);

router.get('/industries/members/:id', postcontroller.showContributorsByInd);

router.get('/industries/members/:id/:comm_id', postcontroller.showContributorsByIndComm);

router.get('/cid/:cid', postcontroller.getPoliticianByCid);

router.get('/industries/name/:name', postcontroller.getIndCodeByIndName);

module.exports = router;
