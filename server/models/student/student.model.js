const mongoose = require('mongoose');

const UnitMarksSchema = new mongoose.Schema({
  unitName: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
});

const TestSchema = new mongoose.Schema({
  marks: {
    type: Number,
    required: true,
  },
  weekName: {
    type: String,
    required: true,
  },
});
const TestTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tests: {
    type: [TestSchema],
    required: true,
  },
});

softSkill = new mongoose.Schema({
  skillName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill',
  },
  marks: Number,
});

techSkill = new mongoose.Schema({
  skillName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill',
  },
  marks: Number,
});

const WeekMarksSchema = new mongoose.Schema({
  weekName: {
    type: String,
    required: true,
  },
  softSkills: {
    type: [softSkill],
    ref: 'Skill',
  },
  techSkills: {
    type: [techSkill],
    required: 'Skill',
  },
  assessmentMarks: {
    type: Number,
    required: true,
  },
  unitMarks: {
    type: [UnitMarksSchema],
    required: true,
  },
});
const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    enum: ['junior', 'senior'],
    required: true,
  },
  cohortName: {
    type: String,
  },
  joiningDate: {
    type: Date,
  },
  githubUsername: {
    type: String,
  },
  githubMail: {
    type: String,
  },
  generalSkills: {
    type: [TestTypeSchema],
  },
  junior: {
    type: [WeekMarksSchema],
  },
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
