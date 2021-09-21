const router = require('express').Router()
    , userRoute = require('./users')
    , taskRoute = require('./task')

router.use('/users', userRoute)
router.use('/tasks', taskRoute)
    
module.exports = router;