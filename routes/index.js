const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.default);
router.post('/createNewTask', homeController.createNewTask);
router.get('/deleteTask', homeController.deleteTask);

router.use('/users', require('./users'));   //request with /users, direct to users route


//for any further routes, accesss from here
//router.use('/routerName', require('./routerFile'))

module.exports = router;