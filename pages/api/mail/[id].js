import dbConnect from "../../../util/mongo";
import Mail from "../../../models/Mail";

export default async function handler(req, res) {
    const {
        method,
        query: {id},
    } = req;

   await dbConnect()

    if(method==="GET"){
        try{
            const message = await Mail.findById(id);
            res.status(200).json(message)
        }catch(err){
            res.status(500).json(err)
        }
    }

    if(method==="DELETE"){
        try{
            await Mail.findByIdAndDelete(id)
            res.status(200).json({status: "DELETED", id})
        }catch(err){
            res.status(500).json({ status: "ERROR"})
        }
    }
}
