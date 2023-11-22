const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    let headers = req.headers.authorization
    let token = headers && headers.split(" ")[1]
    const SECRET_KEY = "secretcode"
    
    if(token == null){
        res.status(401).json({ message: "Unauthorized"})
    }else{
        jwt.verify(token, SECRET_KEY, (error,user,decoded) => {
            if (error) {
                res
                .status(401)
                .json({
                    message: "Invalid token"
                })
            } else {
                console.log(user);
                req.user = decoded
                next()
            }
        })
    }
}



module.exports = {auth}