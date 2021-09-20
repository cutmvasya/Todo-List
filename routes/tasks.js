const { isLogin } = require('../middlewares/auth')
    , router = require('express').Router()
    , TasksController = require('../controllers/tasks')

router.post('/add', isLogin, TasksController.addNewTask)
router.get('/', isLogin, TasksController.getAllTask)
router.get('/:id', isLogin, TasksController.getTaskById)
router.put('/update/:id', isLogin, TasksController.updateStatus)
router.delete('/:id', isLogin, TasksController.deleteTask)


module.exports = router;