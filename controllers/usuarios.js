const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
    const { q, nombre = "no name", apikey, page = 1, limits } = req.query;

    res.json({
        msg: "get Api - usuariosGet",
        q,
        nombre,
        apikey,
        page,
        limits,
    });
};

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: "Post Api - usuariosPost",
        nombre,
        edad,
    });
};

const usuariosPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msg: "Put Api - usuariosPut",
        id,
    });
};
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "Patch Api - usuariosPatch",
    });
};
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "Delete Api - usuariosDelete",
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
};
