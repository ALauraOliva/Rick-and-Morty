const login = (req, res) => {
    const userData = req.body;

    if (userData.email === "test@gmail.com" && userData.password === "123abc") {
       return { access: true };
    } else {
        return { error: "Acceso Denegado",
                               access: false };
    }
}

module.exports = {
    login
};