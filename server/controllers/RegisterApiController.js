import RegisteredUser from "../models/RegisterSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!email || !firstName || !lastName || !password) {
    return res.status(204).json("invalid input");
  }

  const userExists = await RegisteredUser.findOne({ email });
  if (userExists) {
    return res.status(406).json("User already registered");
  }

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt); // 10 -> saltrounds

  const user = new RegisteredUser({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  await user.save();

  return res.status(201).json({ message: "user is registered" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(204).json("invalid input");
  }
  try {
    const user = await RegisteredUser.findOne({ email });

    if (!user) {
      return res.status(406).json({ message: "User is not registered" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: "Password doesn't matched" });
    }

    const payload = {
      email: user.email,
      id: user._id,
    };
    console.log("user...");
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    // console.log(window.location.href);
    return res
      .status(201)
      .json({ message: "Successfully logged in", token, user });
  } catch (err) {
    return res.status(408).json({ message: "server error" });
  }
};
