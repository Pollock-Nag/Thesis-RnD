const express = require('express');
const router = express.Router();
const skillControllers = require('../controllers/skill.controller');

router.post('/addSkill', skillControllers.addSkill);

module.exports = router;
