const router = require('express').Router()
const { register, login, verify, findAll, findOne, create, remove, update } = require('../controllers/userController')
const Authenticate = require('../middleware/authentication')
const { Authorize } = require('../middleware/authorize')

router.post('/api/signup', register)
router.post('/api/signin', login)
router.get('/api/auth', Authenticate, verify)

router.use(Authenticate)

router.get('/api/users', Authorize, findAll)
router.get('/api/users/:id', Authorize, findOne)
router.post('/api/users', Authorize, create)
router.delete('/api/users/:id', Authorize, remove)
router.put('/api/users/:id', Authorize, update)
module.exports = router