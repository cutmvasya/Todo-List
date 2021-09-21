const { getUserData } = require('../helpers/jwt')
    , { Task } = require('../models')

function isLogin(req, res, next) {
    let token = req.headers.token;
    
    if (!token) {
        res.status(401).json({ message: "Please login first!" });
    }
    next();
}

function accessTask (req, res, next) {
    const taskId = req.params.id
    console.log("🚀 ~ file: auth.js ~ line 16 ~ accessTask ~ taskId", taskId)
    const userId = getUserData(req.headers.token).id
    console.log("🚀 ~ file: auth.js ~ line 18 ~ accessTask ~ userId", userId)
    

    const task = Task.findByPk(taskId)
    .then(task => {
    console.log("🚀 ~ file: auth.js ~ line 22 ~ accessTask ~ task", task)
        if(!task) {
            res.status(404).json({ messages: `Task id ${taskId} is not found` })
        } else if (task.dataValues.userId !== userId) {
            res.status(401).json({ messages: `You are not authorized` })
        } else {
            next()
        }
    })
    .catch(next)
}

module.exports = { isLogin, accessTask }