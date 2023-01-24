import RegisterSchema from "../models/RegisterSchema";
import  jwt  from "jsonwebtoken";


export const HomeGet = async(req, res)=> {
    const token = req.headers['x-access-token']
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email;
    const user = await RegisterSchema.findOne({email})

    return res.json({user})
}
