const Student = require('../models/student/schemas/student.schema');

const getAllStudents = (req, res) => {
  res.send('Fetching All Students 200');
};
const createStudent = async (req, res) => {
  const { name, email, password, type } = req.body;

  try {
    let student = new Student({
      name,
      email,
      password,
      type,
    });

    await student.save();

    res.status(201).json({ success: true, data: student });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

module.exports = {
  getAllStudents,
  createStudent,
};
