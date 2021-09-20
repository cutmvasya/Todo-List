require('dotenv').config();

const jwt = require('jsonwebtoken')
    , secretKey = process.env.SECRET_KEY_JWT

function generateToken( dataUser = {} ) {
    let token = jwt.sign(dataUser, secretKey);
    return token;
}

function getUserData(token) {
    let decoded = jwt.verify(token, secretKey);
    console.log("🚀 ~ file: jwt.js ~ line 13 ~ getUserData ~ decoded", decoded)
    return decoded;
    
}

module.exports = { generateToken, getUserData }