const mongoose = require('mongoose');
const { JuniorSchema } = require('./schemas/junior.schema');

const Junior = mongoose.model('Junior', JuniorSchema);

module.exports = {
  Junior,
};
