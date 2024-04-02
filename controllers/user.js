const { response, request } = require('express')

const userGet = (req = request, res = response) => {

    const {q, nombre = "No name", page = "1", limit} = req.query

    res.json({
        msg: 'GET API - Controlador',
        q,
        nombre,
        page,
        limit
    })
}

const userPost = (req, res = response) => {
    const {nombre, apellido, edad, id} = req.body
    res.json({
        msg: 'POST API - Controlador',
        nombre,
        apellido
    })
}

const userPut = (req, res = response) => {
    const {id} = req.params
    res.json({
        msg: 'PUT API - Controlador',
        id
    })
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'DELETE API - Controlador'
    })
}


module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}