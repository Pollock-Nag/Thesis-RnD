const express = require('express');
const router = express.Router();
const studentsControllers = require('../controllers/students.controller');

router.get('/getAllStudnets', studentsControllers.getAllStudents);
router.get('/:id', studentsControllers.getStudentByID);
router.post('/createStudent', studentsControllers.createStudent);
router.get(
  '/getJuniorSoftSkillsFirstWeek/:id',
  studentsControllers.getJuniorSoftSkillsFirstWeek
);
router.get(
  '/getStudentWeekInfo/:id/:week',
  studentsControllers.getStudentWeekInfo
);
router.post(
  '/addSoftTechSkillsByID/:id',
  studentsControllers.addSoftTechSkillsByStudentID
);

module.exports = router;
