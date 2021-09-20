const router = require('express').Router()
    , userRoute = require('./users')
    , taskRoute = require('./tasks')

router.use('/users', userRoute)
router.use('/tasks', taskRoute)
    
module.exports = router;