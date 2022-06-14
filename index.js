const express = require("express");
const app = express();
var calculadora = require("./calculadora") 

//5 com resposta HTML

app.get("/produtos", function(req,res){
    res.send("PRODUTOS");
})

app.get("/contato", function(req,res){
    res.send("FALE CONOSCO");
})

app.get("/historia", function(req,res){
    res.send("QUEM SOMOS NÓS");
})

app.get("/inicio", function(req,res){
    res.send("Bem vindo ao nosso site!");
})

app.get("/servicos", function(req,res){
    res.send("NOSSOS SERVIÇOS");
})

//3 que coletam input do usuário (query param ou semelhante)

app.get("/cadastro/:nome?", function(req,res){
    var nome = req.params.nome;
    if(nome){
        res.send("<h1>Produto " + nome + " criado!</h1>");
    }else{
        res.send("Produto criado!");
    }  
})

//COM QUERY PARAM

app.get("/frete/:valorCompra?", function(req,res){
    var valorCompra = req.params.valorCompra;

    if(valorCompra >= 100){
        res.send("Parabéns, o frete é gratuito! " + valorCompra );
    }else{
        res.send("Valor da compra não elegível para frete grátis. Gaste um pouco mais, vá lá chapa!");
    }  
})



app.get("/consulta/", function(req,res){
    var pix = req.query["pix"];
    if(pix){
        res.send("Chave PIX = " + pix);
    }else{
        res.send("Chave PIX não fornecida");
    }  
        
    
})


//PODE-SE IMPLEMENTAR DEPOIS ESSA PARTE PARA O ITEM 4 DO TRABALHO

app.get("/soma/", function(req,res){
    var a = parseInt(req.query["numero1"]);
    var b = parseInt(req.query["numero2"]);

    var resultado = calculadora.soma(a,b);
        res.send("Resultado Soma:=" + resultado);
 
})


app.get("/calculadora/", function(req,res){
    
    var opcao = req.query["opcao"];
    var a = parseInt(req.query["numero1"]);
    var b = parseInt(req.query["numero2"]);
    

    switch(opcao){
        case "soma":
            var resultado = calculadora.soma(a,b);
            res.send("Resultado Soma:=" + resultado);
            break;
        case "subtração":
            var resultado = calculadora.subtracao(a,b);
            res.send("Resultado da subtracao:=" + resultado);
            break;
        case "multiplicação":
            var resultado = calculadora.multiplicação(a,b);
            res.send("Resultado da multiplicação:=" + resultado);
            break;
        case "divisão":
            var resultado = calculadora.divisao(a,b);
            res.send("Resultado da subtracao:=" + resultado);
            break;
        default:
            res.send("parametro digitado errado")
    }
    
 
})


app.listen(4000,function(erro){
    if(erro){
        console.log("Erro ao iniciar");

    }else{
        console.log("Servidor iniciado");
    }

})











// Yuri Santiago - 2116234
// Jorge
// Douglas
// Eduarda 
