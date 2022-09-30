const { 
    addBeneficiario, 
    getAllBeneficiarios,
    criarBeneficiarioJson,
    criarPropostaJson,
    addProposta,
    jsonBeneficiarios } = require('../models/Beneficiarios.model');



const getAllPlanos = async (req,res)=>{
    return await res.status(200).json(beneficiarios.planos);
}

const getAllPrecos = async (req,res)=>{
    return await res.status(200).json(beneficiarios.precos);
}
const httpGetAllBeneficiarios = async (req,res)=>{
    return await res.status(200).json(jsonBeneficiarios);
}

const httpPostBeneficiario =  (req,res)=>{
    const novoBeneficiario = req.body;
    
    

    addBeneficiario(novoBeneficiario);
    criarBeneficiarioJson();
    addProposta();
    criarPropostaJson();
    return res.status(201).json(novoBeneficiario);
}


module.exports = {
    getAllPlanos,
    getAllPrecos,
    httpGetAllBeneficiarios,
    httpPostBeneficiario
};