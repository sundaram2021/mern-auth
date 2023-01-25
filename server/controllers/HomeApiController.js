import jwt from "jsonwebtoken";

export const HomeGet = async (req, res) => {
//   // const token = req.headers['x-access-token'];
//   const authHeader = req.headers.authorization;
// //   if (authHeader) {
// //     const token = authHeader.split(" ")[1];
// //     // validate and use the token
// //   }

  authHeader ? ( token = authHeader.split(" ")[1]): " ";

//   const token =
//     req.body.token || req.headers["x-access-token"] || req.query.token;
//   // if (!token) {
//   //     return res.status(401).json({ message: 'No token provided' });
//   // }

//   const token = jwt.get("token");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;

    const { user } = req.user;
    return res.json({ message: "User is created", user });
    // next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
