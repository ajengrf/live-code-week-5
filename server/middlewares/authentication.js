const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  let token = req.headers.token
  try {
    let user = jwt.verify(token, process.env.JWT_TOKEN)
    req.user = user
    next()
  } catch (error) {
    res.status(400).json('Invalid token!')
  }
}