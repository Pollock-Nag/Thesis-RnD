const mongoose = require('mongoose');

export const SkillSchema = new mongoose.Schema({
  skillName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
});
