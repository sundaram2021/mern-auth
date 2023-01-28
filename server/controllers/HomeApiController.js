import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();
import RegisterSchema from "../models/RegisterSchema.js";

export const HomeGet = async (req, res) => {
  const token = req.headers["x-access-token"];
  console.log(token);
  try {
  	const decoded = jwt.verify(token, process.env.JWT_SECRET)
  	const email = decoded.email
  	const user = await RegisterSchema.findOne({ email: email })

    console.log('decoded-email => ', decoded.email);
  	return res.json({ status: 'ok', email: user.email })
  } catch (error) {
  	console.log(error)
  	res.json({ status: 'error', error: 'invalid token' })
  }
};
