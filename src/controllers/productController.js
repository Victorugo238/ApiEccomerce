const sequelize = require("../config/sequelize");
const product = require("../models/product");


const productController = {
    product: async (req,res) =>{
        const productAll = await product.findAll();
        return res.status(201).json({
            products: productAll
        });
     },
    newProduct: async (req,res) => {
        try {
            const {productName,productDesc,productQuant,productMark} = req.body;
            if(!productName || !productDesc || !productQuant || !productMark){
                return res.status(401).json({
                    message:"preencher todos os campos"
                })
            }
    
            const result = await sequelize.transaction(async(t) => {
                const newProduct = await product.create({
                    productName,
                    productDesc,
                    productQuant,
                    productMark
                })
            })
            return res.status(401).json({
                message:"produto criado com sucesso"    
            })
            
        } catch (error) {
            console.log(error)
        }



    }
}

module.exports = productController;