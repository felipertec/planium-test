const express = require('express');
const { 
getAllPlanos, 
getAllPrecos, 
getAllBeneficiarios, 
postBeneficiario  } = require('./controllers/Beneficiarios.controller');


const beneficiariosRoute = express.Router();

beneficiariosRoute.get('/planos', getAllPlanos);
beneficiariosRoute.get('/precos', getAllPrecos);
beneficiariosRoute.get('/', getAllBeneficiarios);
beneficiariosRoute.post('/', postBeneficiario);

module.exports = beneficiariosRoute;