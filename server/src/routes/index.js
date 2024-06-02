const { Router }= require('express');
const router = Router();
const userRouter = require("./user")
const companyRouter = require("./company")



router.use('/api', userRouter, companyRouter)


module.exports = router