const mongoose = require('../database');

const SimulationUserCreditDataSchema = new mongoose.Schema({
  
  documentNumber: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase:true,
  },
  mobileNumber:{
    type: Number,
  },
  hasRestriction: {
    type: Boolean,
  },
  preApprovedCredit: {
    type: Boolean,
  },
  createAt: {
    type: Date,
    defalt: Date.now,
  }

});

const SimulationUserCreditData = mongoose.model('SimulationUserCreditData', SimulationUserCreditDataSchema);

module.exports = SimulationUserCreditData;