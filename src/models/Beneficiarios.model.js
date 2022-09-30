const planos = require('../db/plans.json');
const precos = require('../db/prices.json');
const jsonBeneficiarios = require('../db/beneficiarios.json')

const fs = require('fs');

const beneficiarios = [];

const beneficiario = { 
    "nomeBenificiario":'Felipe', 
    "idadeBeneficiarios":29, 
    "registroPlano":1
};

beneficiarios.push(beneficiario);
    
function criarBeneficiarioJson(){
    var jsonContent = JSON.stringify(beneficiarios);
    fs.writeFile("./src/db/beneficiarios.json", jsonContent, 'utf8',function(err){
        if(err){
            console.log("Error ao tentar escrever o arquivo json");
            return console.log(err);
        }
        console.log("Arquivo Json Criado com sucesso!");
    })
}

       var encontrarPlano = jsonBeneficiarios.map((cliente,indice) =>{
            for(indice in planos){
                if(planos[indice].codigo === cliente.registroPlano){
                 return cliente.plano = planos[indice].nome
                }
            }

            let precoEncontrado;
    
            for(precos in indice){
                if(planos[indice].codigo === cliente.registroPlano && precos[indice].minimo_vidas === 1){
                    precoEncontrado = precos[indice];
                }else if(planos[indice].codigo === cliente.registroPlano && precos[indice].minimo_vidas > 1){
                    precoEncontrado = precos[indice]
                }
            }
    
            if(cliente.idadeBeneficiarios <= 17){
                cliente.preco = precoEncontrado.faixa1
            }else if(cliente.idadeBeneficiarios >= 18 && cliente.idadeBeneficiarios <= 40){
                cliente.preco = precoEncontrado.faixa2
            }else{
                cliente.preco = precoEncontrado.faixa3
            }
            
        })
        
        
    



const propostas = [];


const proposta = Object.assign(jsonBeneficiarios,{encontrarPlano});
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
    jsonBeneficiarios,
    getAllBeneficiarios,
    addBeneficiario,
    criarBeneficiarioJson,
    addProposta
};