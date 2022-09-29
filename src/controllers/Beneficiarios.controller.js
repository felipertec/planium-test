const beneficiarios = require('../models/Beneficiarios.model');

const getAllPlanos = async (req,res)=>{
    return await res.status(200).json(beneficiarios.planos);
}

const getAllPrecos = async (req,res)=>{
    return await res.status(200).json(beneficiarios.precos);
}
const getAllBeneficiarios = async (req,res)=>{
    return await res.status(200).json(beneficiarios.beneficiario);
}

const postBeneficiario =  (req,res)=>{
    const novoBeneficiario = req.body;
    
    if(!novoBeneficiario.quantidadeBeneficiario){
        return res.status(400).json({
            error: "Há Campos vazios!"
        })
    }

    beneficiarios.beneficiario.push(novoBeneficiario);
    return res.status(201).json(novoBeneficiario);
}


module.exports = {
    getAllPlanos,
    getAllPrecos,
    getAllBeneficiarios,
    postBeneficiario
};