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

const addCategoryToSkill = async (req, res) => {
  try {
    const { id } = req.params;
    let { category } = req.body;
    category = category.toLowerCase();
    const skill = await Skill.findById(id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    if (skill.category.includes(category)) {
      return res.status(400).json({ message: 'Skill already added' });
    }
    skill.category.push(category);
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const removeCategoryFromSkill = async (req, res) => {
  try {
    const { id } = req.params;
    let { category } = req.body;
    category = category.toLowerCase();
    const skill = await Skill.findById(id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    if (!skill.category.includes(category)) {
      return res.status(400).json({ message: 'Skill not found' });
    }
    skill.category = skill.category.filter((c) => c !== category);
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
const getSkillsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const skills = await Skill.find({ category });
    if (skills.length === 0) {
      return res.status(404).json({ message: 'No skills in this category' });
    }
    return res.status(200).json(skills);
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
  addCategoryToSkill,
  removeCategoryFromSkill,
  getSkillsByCategory,
};
