var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");

/*
 * GET home page.
 */
router.get('/', ctrlMain.frontPage);

router.get('/frontPage', ctrlMain.frontPage);


router.get('/homePage', ctrlMain.home);
/*
 * GET text fields page.
 */
router.get('/aboutLink', ctrlMain.get_about);

/*
 * GET Subscribe page.
 */




router.get('/worldMap', ctrlMain.get_worldMap);
router.get('/countryDetails', ctrlMain.get_countryDetails);
router.get('/countryForm', ctrlMain.get_countryForm);
router.get('/DevLink', ctrlMain.get_devpage);
router.get('/electricDB', ctrlMain.get_edashboard);
router.get('/communicationDB', ctrlMain.get_cdashboard);
router.get('/populationDB', ctrlMain.get_pdashboard);
router.get('/employmentDB', ctrlMain.get_emdashboard);
router.get('/educationDB', ctrlMain.get_eddashboard);

/*
 * GET second Page Link.
 */
router.get('/secondPageLink', ctrlMain.get_second_page);
router.post('/secondPageLink', ctrlMain.post_second_page);
module.exports = router;