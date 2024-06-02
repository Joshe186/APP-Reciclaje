const { Router }= require('express');
const router = Router();

const { AllCompany } = require("../controllers/Company/AllCompany");





router.get('/companys', AllCompany)




module.exports = router