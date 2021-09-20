const { User } = require('../models')
    , { encrypt, checkPw } = require('../helpers/bcrypt')
    , { generateToken } = require('../helpers/jwt')

class UsersController {
    static async getUsers (req, res) {
        const users = await User.findAll();
        res.status(200).json(users)
        console.log("🚀 ~ file: users.js ~ line 6 ~ UsersController ~ getUsers ~ users", users)
    }

    static async signup (req, res) {
        console.log("🚀 ~ file: users.js ~ line 11 ~ UsersController ~ create ~ req.body", req.body)
        let usernameUser = req.body.username;
        let passwordUser = encrypt(req.body.password);
        let genderUser = req.body.gender;

        let objUser = {
            username: usernameUser,
            password: passwordUser,
            gender: genderUser
        }
        const user = await User.create(objUser);
        if(user){
            res.status(200).json({ message: "Success"}, user);
        }
    }

    static async signIn(req, res, next) {
        const username = req.body.username;
        const password = req.body.password;

        //get user by username
        const user = await User.findOne({ where: { username: username } });
        console.log("🚀 ~ file: users.js ~ line 34 ~ UsersController ~ signIn ~ user", user)
        
        const hashedPw = user.dataValues.password;
        console.log("🚀 ~ file: users.js ~ line 38 ~ UsersController ~ signIn ~ hashedPw", hashedPw)
        
        if (checkPw(password, hashedPw)) {
            let dataUser = user.dataValues;
            delete dataUser.password;
            console.log("🚀 ~ file: users.js ~ line 49 ~ UsersController ~ signIn ~ dataUser", dataUser)

            let token = generateToken(dataUser);
            res.status(200).json({ success: { status: true, message: "Login success" }, token });
            
        } else{
            let message = { message: "auth failed"}
            res.status(401).json(message);
        } 
    }

    
}


module.exports = UsersController;