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
    let jsonContent = JSON.stringify(beneficiarios);
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
        })
        
        var encontrarPreco = jsonBeneficiarios.map((cliente,indice)=>{
            for(indice in precos){
                if(cliente.registroPlano === precos[indice].codigo){
                    if(cliente.idadeBeneficiarios <= 17){
                        return cliente.preco = precos[indice].faixa1
                    }else if(cliente.idadeBeneficiarios >= 18 && cliente.idadeBeneficiarios <= 40){
                        return cliente.preco = precos[indice].faixa2
                    }else{
                        return cliente.preco = precos[indice].faixa3
                    }
                }
            }
        })
        


const propostas = [];


function criarPropostaJson(){
    let jsonContent2 = JSON.stringify(propostas);
    fs.writeFile("./src/db/propostas.json", jsonContent2, 'utf8',function(err){
        if(err){
        console.log("Error ao tentar escrever o arquivo json");
            return console.log(err);
        }
        console.log("Arquivo Proposta Json Criado com sucesso!");
    })
}

console.log(propostas);


function getAllBeneficiarios(){
    return Array.from(beneficiarios);
}
function addBeneficiario(beneficiario){
    return beneficiarios.push(beneficiario);
}

function addProposta(){
    const proposta = Object.assign(jsonBeneficiarios,{encontrarPlano},{encontrarPreco});
    return propostas.push(proposta)
}


module.exports = {
    planos,
    precos,
    jsonBeneficiarios,
    getAllBeneficiarios,
    addBeneficiario,
    criarBeneficiarioJson,
    criarPropostaJson,
    addProposta
};