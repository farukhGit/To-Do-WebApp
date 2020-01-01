const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
router.get('/home', homeController.home);
router.get('/secondAction', homeController.secondAction);

router.use('/users', require('./users'));   //request with /users, direct to users route

//for any further routes, accesss from here
//router.use('/routerName', require('./routerFile'))

module.exports = router;