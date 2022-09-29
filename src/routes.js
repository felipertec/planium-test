const express = require('express');
const { 
getAllPlanos, 
getAllPrecos, 
httpGetAllBeneficiarios, 
httpPostBeneficiario  } = require('./controllers/Beneficiarios.controller');


const beneficiariosRoute = express.Router();

beneficiariosRoute.get('/planos', getAllPlanos);
beneficiariosRoute.get('/precos', getAllPrecos);
beneficiariosRoute.get('/', httpGetAllBeneficiarios);
beneficiariosRoute.post('/', httpPostBeneficiario);

module.exports = beneficiariosRoute;