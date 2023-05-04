const mongoose = require('mongoose');
const SkillSchema = new mongoose.Schema({
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
module.export = SkillSchema;
