const mongoose = require('mongoose');
import { SkillSchema } from './skill.schema';
import { UnitMarksSchema } from './unitMarks.schema';

export const WeekMarksSchema = new mongoose.Schema({
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
