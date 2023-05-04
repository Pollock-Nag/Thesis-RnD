const mongoose = require('mongoose');
const { SkillSchema } = require('./skill.schema');
const { UnitMarksSchema } = require('./unitMarks.schema');

const WeekMarksSchema = new mongoose.Schema({
  weekName: {
    type: String,
    required: true,
  },
  softSkills: {
    type: [SkillSchema],
    required: true,
  },
  techSkills: {
    type: [SkillSchema],
    required: true,
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

module.export = WeekMarksSchema;
