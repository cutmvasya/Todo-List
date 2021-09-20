const { User, Task } = require('../models')
    , { getUserData } = require('../helpers/jwt')
    , { Op } = require('sequelize')

class TasksController {
    static async addNewTask(req, res) {
        let userId = getUserData(req.headers.token).id
        console.log("🚀 ~ file: tasks.js ~ line 7 ~ TasksController ~ addNewTask ~ userId", userId)
        
        let titleTask = req.body.title;
        let descriptionTask = req.body.description;
        let statusTask = req.body.status;

        let objTask = {
            title: titleTask,
            description: descriptionTask,
            status: statusTask,
            userId
        }

        const task = await Task.create(objTask);
        if(task) {
            res.status(201).json(task);
        }
    }

    static async getAllTask (req, res) {
        let userData = getUserData(req.headers.token);
        console.log("🚀 ~ file: tasks.js ~ line 28 ~ TasksController ~ getAllTask ~ userData", userData)
        let userTaskId = userData.id;

        const task = await Task.findAll({
            where: {
                userId: userTaskId
            }
        });
        console.log("🚀 ~ file: tasks.js ~ line 35 ~ TasksController ~ getAllTask ~ task ", task )
        return res.status(200).json({ success: { message: 'Here is your tasks :'}, data: task})
        
    }

    static async getTaskById(req, res) {
        const { id } = getUserData(req.headers.token)
        console.log("🚀 ~ file: tasks.js ~ line 41 ~ TasksController ~ getTaskById ~ userId", id)
        const { id: taskId } = req.params
        console.log("🚀 ~ file: tasks.js ~ line 45 ~ TasksController ~ getTaskById ~ taskId", taskId)

        const task = await Task.findOne({ 
            where: {
                [Op.and]: [{id: taskId }, {userId: id}]
            }, 
            include: [
                {
                    model: User, 
                    attributes: ["username"] ,
                    required: true
                }
            ]
        })
        return res.status(200).json(task);
    }

    static async updateStatus(req,res){
        const { id } = getUserData(req.headers.token)
        const { id: taskId } = req.params
        const update = await Task.update({
            status : "done"
        },{where:{
            userId : id,
            id : taskId
        }})
        res.status(200).json("success")
    }

    static async deleteTask(req,res){
        const { id, gender } = getUserData(req.headers.token)
        const { id: taskId } = req.params

        if (gender !== 'female') {
            res.status(403).json({ message: "forbidden access to this endpoint"})
        }
        const task = await Task.destroy({
            where:{
                userId : id,
                id : taskId
            }
        })
        res.status(200).json("success")
    }
}

module.exports = TasksController;