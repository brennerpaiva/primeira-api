const express = require('express')

const server = express();

//Query params = ?nome=NodeJS
//Route params = /curso/2
//Request Body = { nome: 'Nodejs', tipo: 'Backend'}

//Crud > Create, Read, Update, Delete


//localhost:3000/curso

const cursos = ['NodeJS', 'JavaScript', 'ReactNative'];

server.get('/curso/:index', (req, res) => {

    const { index } = req.params;

    return res.json(cursos[index]);
})

server.listen(3000);

