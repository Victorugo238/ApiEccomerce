const sequelize = require("../config/sequelize");
const  loginAdmin = require("../models/loginAdmin");

const adminController = {

    login: async (req, res) => {
        const {nome, password} = req.body;
        if(!nome || !password){
            return res.status(401).json({
                mensagem: "Preencher todos os campos"
            })
        }
        const authUser = await loginAdmin.findOne({
            where:{
                nome: nome,
                password:password,
            }
            })
        if(!authUser){
            return res.status(401).json({
                message:"Dados incorretos"
            })
        }
            
        return res.status(201).json({
            message:"login efetuado com sucesso"
        })
     },

     createAdmin: async (req,res) => {
       
        try {
            const {nome,password} = req.body;
            if(!nome || !password){
                return res.status(401).json({
                    message:"Preencher todos os campos"
                })
            }
            const result = await sequelize.transaction(async(t) => {
                const user = await loginAdmin.create({
                    nome,
                    password,
                })
            })
            return res.status(201).json({
                message:"Usuario cadastrado com sucesso"
            })
        } catch (error) {
            console.log(error);
        }
     }




};

module.exports = adminController;