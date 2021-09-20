function isLogin(req, res, next) {
    let token = req.headers.token;
    
    if (!token) {
        res.status(401).json({ message: "Please login first!" });
    }
    next();
}

module.exports = { isLogin }