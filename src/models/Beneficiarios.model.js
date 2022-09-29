const planos = require('../db/plans.json');
const precos = require('../db/prices.json'); 
const beneficiario = [{"quantidadeBeneficiarios": 2, "nomeBenificiario":['felipe','Maria'], "idadeBeneficiarios":[29,68], "registroPlano":"reg6"}];

module.exports = {
    planos,
    precos,
    beneficiario
};