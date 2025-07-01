const mongoose = require('mongoose');

const accessLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  ip: String,
  route: String,
  method: String,
  timestamp: {
    type: Date,
    default: Date.now,
    expires: 86400
  }
});

module.exports = mongoose.model('AccessLog', accessLogSchema);