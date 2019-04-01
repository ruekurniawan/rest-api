const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
  try {
    
    let token = req.headers.token
    if(token) {
      var decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.authentication = decoded
      next()
    } else {
      res.status(401).json({
        msg : `U must be login`
      })
    }
  } catch(err) {
    res.status(400).json({
      msg : `Bad Request`
    })
  }
}