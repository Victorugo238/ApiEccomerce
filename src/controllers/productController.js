const sequelize = require("../config/sequelize");
const product = require("../models/product");


const productController = {
    products: async (req,res) =>{
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
    },
    product: async(req,res) =>{
        const { id } = req.params;
        const produ = await product.findOne({
            where: {
                id: id
            }
        })

        if(!produ){
            return res.status(401).json({
                message:"produto não encontrado"
            })
        }
        return res.status(201).json({
            produto:{
                produ
            } 
        })
    },

    delProduct: async (req,res) => {
        const { id } = req.params;
        const delProduct = product.findOne({
            where:{
                id:id,
            }
        })
        if(!delProduct){
            return res.status(401).json({
                message:"ERR0 PRODUTO NÃO ENCONTRADO"
            })
        }

        const result = await sequelize.transaction(async(t) => {
            const deleteprod = await product.destroy({
                where:{
                    id
                }
            })
        })

        return res.status(201).json({
            message:"Produto excluido com sucesso!"
        })
    }
}

module.exports = productController;