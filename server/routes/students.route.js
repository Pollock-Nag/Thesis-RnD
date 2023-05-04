const express = require('express');
const router = express.Router();
const studentsControllers = require('../controllers/students.controller');

router.get('/getAllStudnets', studentsControllers.getAllStudents);
router.get('/:id', studentsControllers.getStudentByID);
router.post('/createStudent', studentsControllers.createStudent);

module.exports = router;
