const { isLogin, accessTask } = require('../middlewares/auth')
    , router = require('express').Router()
    , TasksController = require('../controllers/tasks')


router.post('/add', isLogin, TasksController.addNewTask) //oke
router.get('/', isLogin, TasksController.getAllTask) //oke
router.get('/:id', isLogin, accessTask,TasksController.getTaskById) //oke
router.put('/update/:id', isLogin, accessTask, TasksController.updateStatus)
router.delete('/:id', isLogin, accessTask, TasksController.deleteTask)


module.exports = router;