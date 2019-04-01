module.exports = {
  Authorize: function (req, res, next) {
    let role = req.authentication.role
    let id = req.authentication.id
    if (role === "admin" || id == req.params.id) {
      next()
    } else {
      res.status(400).json({
        msg: `You Are not Admin`
      })
    }
  }
}