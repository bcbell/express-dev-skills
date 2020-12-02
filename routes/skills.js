var express = require('express');
var router = express.Router();
const skillsCtrl= require('../controllers/skills')


router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:devSkill', skillsCtrl.show)
router.post('/', skillsCtrl.create)



module.exports = router;
