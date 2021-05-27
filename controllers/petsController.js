const petsController ={
    index: (req, res)=>{
        return res.send('exibindo lista de pets');    
    },
    show: (req, res)=>{
        //console.log(req.params);
        //pegando parametro nome da rota /pets
        const {nome} = req.params; 
        return res.send(`Exibindo detalhes do pet ${nome}`);
    }
}

module.exports = petsController;