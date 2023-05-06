const Skill = require('../models/student/skill.model');

const addSkill = async (req, res) => {
  try {
    const { skillName, description, category } = req.body;

    const skill = new Skill({ skillName, description });
    const categories = category.split(',').map((c) => c.trim());
    skill.category.push(...categories);
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllSkills = async (req, res) => {
  console.log('hello');
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
const getJuniorSkills = async (req, res) => {
  try {
    const skills = await Skill.find({ category: 'junior' });
    res.status(200).json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
const getSeniorSkills = async (req, res) => {
  try {
    const skills = await Skill.find({ category: 'senior' });
    res.status(200).json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  addSkill,
  getAllSkills,
  getJuniorSkills,
  getSeniorSkills,
};
