const Skill = require('../models/student/skill.model');
const Student = require('../models/student/student.model');

const getAllStudents = (req, res) => {
  res.send('Fetching All Students 200');
};
const getStudentByID = async (req, res) => {
  const studentId = req.params.id;
  const studentInfo = await Student.findById(studentId);
  res.status(200).send(studentInfo);
};

const createStudent = async (req, res) => {
  // const { name, email, password, type } = req.body;

  try {
    let student = new Student({
      ...req.body,
    });

    await student.save();

    res.status(201).json({ success: true, data: student });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

const getJuniorSoftSkillsFirstWeek = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllStudents,
  createStudent,
  getStudentByID,
  getJuniorSoftSkillsFirstWeek,
};
