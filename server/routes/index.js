let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home',  indexController.displayHomePage);


/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET Route for displaying the Login Page*/
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login Page*/
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register Page*/
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register Page*/
router.post('/register', indexController.processRegisterPage);

/* GET Route to perform UserLogout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
