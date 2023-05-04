const mongoose = require('mongoose');
const { StudentSchema } = require('./schemas/student.schema');

module.exports = mongoose.model('Student', StudentSchema);
