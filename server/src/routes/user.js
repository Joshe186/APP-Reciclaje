const { Router }= require('express');
const router = Router();
const { Register } = require("../controllers/User/Register")
const { Login } = require("../controllers/User/Login")
const { Datapersonal } = require("../controllers/User/Datapersonal")
const { DeleteAccount } = require("../controllers/User/DeleteAccount")





router.post('/register', Register)
router.post('/login', Login)
router.get('/datapersonal', Datapersonal)
router.delete('/deleteaccount', DeleteAccount)





module.exports = router