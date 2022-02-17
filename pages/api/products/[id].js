import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
    const {
        method,
        query: {id},
    } = req;

   await dbConnect()

    if(method==="GET"){
        try{
            const product = await Product.findById(id);
            res.status(200).json(product)
        }catch(err){
            res.status(500).json(err)
        }
    }

    if(method==="PUT"){
        try{
            const updatedProduct = await Product.findByIdAndUpdate(id, {
                $set: req.body
            }, {new: true})
            console.log(updatedProduct)
            res.status(200).json("Product Updated")
        }catch(err){
            res.status(500).json(err);
        }
    }
    if(method==="DELETE"){
        try{
            await Product.findByIdAndDelete(id)
            res.status(200).json({status: "DELETED", id})
        }catch(err){
            res.status(500).json({ status: "ERROR"})
        }
    }
}
