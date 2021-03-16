const express = require('express');

const SimulationUserCreditData = require('../models/SimulationUserCreditData');
const User = require('../models/User');

const router = express.Router();



router.get('/simulationUserData', async (req, res) => {

 let getCpf = req.query.cpf;
  try {
    const documentNumberData = await SimulationUserCreditData.find({documentNumber:getCpf});
   let simulationUserResponse = res.json(documentNumberData);
  
  return simulationUserResponse;
 
  }catch (err) {
     return res.status(400).send({ error: 'Registration failed'})
  }
});


router.post('/insert', async (req, res) => {
  try {
    const ins = await SimulationUserCreditData.create(req.body);

    return res.send({ins});
  }catch (err) {
   
    return res.status(400).send(JSON.stringify(err))
  }
});




module.exports = app => app.use('/auth', router);