const router = require('express').Router()
    , UsersController = require('../controllers/users')

router.get('/', UsersController.getUsers)
router.post('/signup', UsersController.signup)
router.post('/signin', UsersController.signIn)

module.exports = router