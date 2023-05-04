const mongoose = require('mongoose');
export const TestSchema = new mongoose.Schema({
  marks: {
    type: Number,
    required: true,
  },
  weekName: {
    type: String,
    required: true,
  },
});
