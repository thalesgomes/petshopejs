const express = require('express'); //Chama o modulo express
const servicosController = require('../controllers/servicosController');
const router = express.Router();// chama o metodo que gerencia as rotas

router.get('/', (req,res)=>{
    res.render('admin', {titulo: "Painel Administrativo"});

});

router.get('/servicos', servicosController.index);
router.get('/servicos/cadastro', servicosController.cadastro);

router.post('/servicos/cadastro', servicosController.salvar);


module.exports = router;