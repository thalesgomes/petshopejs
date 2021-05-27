const fs = require('fs');/* modulo instalado para manipuação de arquivos */
const path = require('path');/** Modulo nativo para manipulaçao de arquivos */

const {uuid} = require('uuidv4');

const servicosPath = path.join('servicos.json');/** caminho do arquivo json */

let servicos = fs.readFileSync(servicosPath, { encoding: 'utf-8'});
servicos = JSON.parse(servicos);

const servicosController = {
    index:(req,res)=>{
        //metodos index lista serviços
        return res.render("adminServicos", {titulo: 'Serviços', servicos: []});
    },
    cadastro : (req, res)=>{
        return res.render('servicosCadastro', {titulo: 'Cadastrar Serviços'});
    },
    salvar : (req, res)=>{
        let { nome , descricao, preco, ilustracao} = req.body;
        /** adiciona o novo serviço no array */
        servicos.push( { id:uuid (), nome , descricao, preco, ilustracao});
        /**converte o array para json */
        let dadosJson =  JSON.stringify(servicos);
        /**salva json atualizado no arquivo */
        fs.writeFileSync(servicosPath, dadosJson);
        
        return res.redirect('/admin/servicos');
    },
    show: (req, res)=>{
        //metodos show que mostra o um serviço de cada vez
        const {nome} = req.params; 
        return res.send(`exibindo detalhes do serviço ${nome}`);
    }
}
module.exports = servicosController;