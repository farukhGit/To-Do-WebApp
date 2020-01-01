const express = require('express');
const router = express.Router();

//access the users_controller from the user route
const userController = require('../controllers/users_controller');

//map the route to users_controller's action i.e profile
router.get('/profile', userController.profile);
router.get('/delete', userController.profileDelete);

router.use('/posts', require('./posts'));

module.exports = router;