const planos = require('../db/plans.json');
const precos = require('../db/prices.json');

const beneficiarios = [];
const beneficiario = {"quantidadeBeneficiarios": 2, "nomeBenificiario":['Felipe','Maria'], "idadeBeneficiarios":[29,68], "registroPlano":"reg6"};
beneficiarios.push(beneficiario);

const planosPrecos = ()=>{
    let novoPlano = beneficiarios.length - 1;
    const precoEscolhido = [];
    for(let i = 0; i<beneficiarios[novoPlano].idadeBeneficiarios.length; i++){   
        if(beneficiarios[novoPlano].idadeBeneficiarios[i] <= 17){
             precoEscolhido.push(precos[0].faixa1)
        }else if(beneficiarios[novoPlano].idadeBeneficiarios[i] >= 18 && beneficiarios[novoPlano].idadeBeneficiarios[i] <= 40){
             precoEscolhido.push(precos[0].faixa2)
        }else{
             precoEscolhido.push(precos[0].faixa3)
        }
    }
     return precoEscolhido;
}


const propostas = [];


const proposta = Object.assign(beneficiario,{"minimum_vidas": 2, "plano_escolhido_preco":planosPrecos()});
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