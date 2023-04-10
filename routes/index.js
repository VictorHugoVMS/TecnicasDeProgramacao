const express = require('express')
//rotas (quando o servidor for acessado, para onde ele vai??) (endpoint)
const router = express.Router();

/*router.get('/',(req,res)=>{
    let nome = req.query.nome;
    let idade = req.query.idade;

    res.send('olá ' + nome + " , voce tem" + idade + "anos de idade")
})*/


/*router.get('/',(req,res)=>{
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;

res.json(
    nomecom = nome + "" + sobrenome
)

router.get('/',(req,res)=>{
    res.json(req.query)

});

router.get('/',(req,res)=>{
    let id = req.params.id;
    res.send('ID do post: ' + id);
})*/

//          ////         //
  //      //    //     //
    // //         // //

module.exports = router;

