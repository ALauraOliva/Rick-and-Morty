const login = (req, res) => {
    const userData = req.body;

    if (userData.email === "test@gmail.com" && userData.password === "123abc") {
        res.status(200).json({ access: true });
    } else {
        res.status(401).json({ error: "Acceso Denegado",
                               access: false });
    }
}

module.exports = {
    login
};