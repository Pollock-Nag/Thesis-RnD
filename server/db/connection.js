const mongoose = require('mongoose');

const uri = 'mongodb+srv://zahid:zahid@testingdb.ifnogcp.mongodb.net/thesisRnD';

try {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('🍀  MongoDB connected');
} catch (err) {
  console.error('Error connecting to MongoDB:', err.message);
}

module.exports = mongoose;
