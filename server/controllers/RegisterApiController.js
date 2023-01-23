import RegisteredUser from "../models/RegisterSchema.js";
import router from "../routes/RegisterApi.js";

export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!email || !firstName || !lastName || !password) {
    return res.status(204).json("invalid input");
  }

  const userExists = await RegisteredUser.findOne({ email });
  if (userExists) {
    return res.status(406).json("User already registered");
  }

  const user = new RegisteredUser({ firstName, lastName, email, password });

  await user.save();

  res.status(201).json({ message: "user is registered" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(204).json("invalid input");
  }

  const user = await RegisteredUser.findOne({ email, password });

  if (!user) {
    res.status(406).json({ message: "User is not registered" });
    return;
  }

  res.json({ message: "User is logged in" });
};
