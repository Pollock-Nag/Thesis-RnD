const mongoose = require('mongoose');
const { WeekMarksSchema } = require('./weekMarks.schema');

export const JuniorSchema = new mongoose.Schema({
  weeklyMarks: {
    type: [WeekMarksSchema],
    required: true,
  },
});
