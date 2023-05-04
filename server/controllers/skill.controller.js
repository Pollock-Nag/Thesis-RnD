const Skill = require('../models/student/skill.model');

const addSkill = async (req, res) => {
  try {
    const { skillName, description, marks } = req.body;
    const skill = new Skill({ skillName, description, marks });
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  addSkill,
};
