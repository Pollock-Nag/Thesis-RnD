const mongoose = require('mongoose');
export const UnitMarksSchema = new mongoose.Schema({
  unitName: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
});
