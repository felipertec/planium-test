const planos = require('../db/plans.json');
const precos = require('../db/prices.json');

const beneficiarios = [];
const propostas = [];

const beneficiario = {"quantidadeBeneficiarios": 2, "nomeBenificiario":['Felipe','Maria'], "idadeBeneficiarios":[29,68], "registroPlano":"reg6"};
const proposta = Object.assign(beneficiario,{"minimum_vidas": 2, "plano_escolhido_preco":[65.00,75.00]});
beneficiarios.push(beneficiario);
propostas.push(proposta)

console.log(propostas);
function getAllBeneficiarios(){
    return Array.from(beneficiarios);
}
function addBeneficiario(beneficiario){
    return beneficiarios.push(beneficiario);
}

function addProposta(proposta){
    return propostas.push(proposta);
}

module.exports = {
    planos,
    precos,
    getAllBeneficiarios,
    addBeneficiario,
    addProposta
};