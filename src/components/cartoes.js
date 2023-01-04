const smashDaCasa={
    imagem:" <img src='../assets/lanche.jpeg'  class='lanche'>",
    name:  "<h1 >Smash da casa</h1>",
    descricao:"    <p class='hamburguerGramas'>2 Hamburguer 200g</p>"
}

const divCard="<div class='card'>"

function lego(imagem,name,descricao){
 const cardElement= document.getElementById('cardInd');

 const montando= cardElement + imagem+ name+ descricao;

 cardElement.innerHTML= cardElement.innerHTML + montando;
}
lego(smashDaCasa.imagem,smashDaCasa.name,smashDaCasa.descricao);
