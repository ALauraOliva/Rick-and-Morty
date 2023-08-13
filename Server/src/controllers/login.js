const login = (req, _res) => {
    const userData = req.body;

    if (userData.email === "test@gmail.com" && userData.password === "123abc") {
       return { access : true };
    } else {
        return { error  : "Denied Access",
                 access : false };
    }
}

module.exports = {
    login
};