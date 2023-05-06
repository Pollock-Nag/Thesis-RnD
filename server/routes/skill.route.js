const express = require('express');
const router = express.Router();
const skillControllers = require('../controllers/skill.controller');

router.post('/addSkill', skillControllers.addSkill);
router.get('/getAllSkills', skillControllers.getAllSkills);
router.get('/getJuniorSkills', skillControllers.getJuniorSkills);
router.get('/getSeniorSkills', skillControllers.getSeniorSkills);

module.exports = router;
