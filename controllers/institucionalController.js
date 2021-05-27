const institucionalController = {
    index: (req, res)=>{
        return res.render('index' , {titulo: 'Home'});
    },

    sobre : (req, res) =>{
        return res.render("sobre", {titulo: 'Sobre'});
    },
    servicos: (request, response) => {
        return response.render('servicos', { titulo: 'Serviços' });
    },
    contato: (request, response) => {
        return response.render('contato', { titulo: 'Contato' });
    }

    
}

module.exports = institucionalController;