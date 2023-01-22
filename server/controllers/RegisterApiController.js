export const register = async(req, res) => {
    const { firstName, lastName, email, password } = req.body;
    res.json({message: "User is created"})
    console.log(firstName, lastName, email, password);
}