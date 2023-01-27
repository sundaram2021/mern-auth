import jwt from "jsonwebtoken"
import * as dotenv from "dotenv";
dotenv.config();
// import RegisterSchema from "../models/RegisterSchema.js";

export const HomeGet = async (req, res, next) => {
  const token = req.headers['x-access-token'];

  try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		const email = decoded.email;
		
  //  log
		return res.json({ status: 'ok', message: "User token verified", email })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
  // if (
  //   req.headers.Authorization &&
  //   req.headers.Authorization.split(" ")[0] === "Bearer"
  // ) {
  //   const token = req.headers.Authorization.split(" ")[1];
  //   // Continue with the rest of the code
  //   console.log(token);
  //   try {
  //     const decoded = await jwt.verify(token, processs.env.JWT_SECRET);
  //     const email = decoded.email;
  //     // const user = await RegisterSchema.findOne({ email: email })
  //     console.log(email);
  //     return res.json({ message: "User is created" });
  //     // next();
  //   } catch (err) {
  //     return res.status(401).json({ message: "Invalid token" });
  //   }
  // } else {
  //   return res.status(401).json({ message: "Authorization token missing" });
  // }
  // // console.log(req.url);
};
