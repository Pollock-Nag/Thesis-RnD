const mongoose = require('mongoose');
import { TestSchema } from './test.schema';

export const TestTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tests: {
    type: [TestSchema],
    required: true,
  },
});
