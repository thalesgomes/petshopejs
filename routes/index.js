const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petsController');
const servicosController = require('../controllers/servicosController');
const institucionalController = require('../controllers/institucionalController')

//rotas para paginas institucionais

//http://localhost:3000/
router.get('/', institucionalController.index);

//http://localhost:3000/sobre
router.get('/sobre', institucionalController.sobre);

// rota para /pets que retorna o método index da petsController
router.get('/pets', petsController.index);

router.get('/contato', institucionalController.contato);

router.get('/pets/:nome', petsController.show);

router.get('/servicos', institucionalController.servicos);

module.exports = router;
