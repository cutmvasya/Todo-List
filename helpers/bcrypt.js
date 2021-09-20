const bcrypt = require('bcrypt');

function encrypt(rawPassword) {
    const saltRounds = 10;
    const hash = bcrypt.hashSync(rawPassword, saltRounds);
    return hash;
}

function checkPw(rawPassword, hashedPw) {
    return bcrypt.compareSync(rawPassword, hashedPw);
}

module.exports = { encrypt, checkPw }