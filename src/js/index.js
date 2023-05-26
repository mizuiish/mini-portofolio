/*
Objetivo: quando clicarmos na aba devemos mostrar o conteúdo que foi clicado pelo usuário
e esconder o conteúdo da aba anterior


*/

//1- dar um jeito de pegar os elementos que representam as abas no html

const abas = document.querySelectorAll(".aba");

//2- dar um jeito de identificar o clique no elemento da aba
abas.forEach(aba => {

    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        };
        
        selecionarAba(aba);

        mostrarInformacoesDaAba(aba);       
        
    });   
});

function selecionarAba(aba){
    //3- quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")

     //4- marcar a aba clicada como selecionada
     aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba){
    // 5- esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //6- mostrar o conteúdo da aba selecionada 
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba).classList.add("selecionado");
}