const getAllStudents = (req, res) => {
  res.send('Fetching All Students 200');
};
const createStudent = (req, res) => {
  res.send('Posting student data');
};
module.exports = {
  getAllStudents,
  createStudent,
};
