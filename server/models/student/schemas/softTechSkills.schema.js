const mongoose = require('mongoose');
const softTechSkill = new mongoose.Schema({
  skillName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill',
  },
  marks: Number,
});

module.exports = softTechSkill;
