<template>
    <input  class="inputLanche" id="idCard" type="checkbox">
    <label for="idCard">
    <div class="card"  >
        <img src="../assets/lanche.jpeg" alt="" class="lanche">
        <h1 class="NameLanches">Smash da casa</h1>
        <p class="hamburguerGramas">2 Hamburguer 200g</p>
      <h1 id="preco"> </h1>
    </div>
</label>
</template>

<script>

export default{
    name:"ComponentCard",
  
};
</script>

<style>
.inputLanche{
   
   display: none;
   
}
.card{
    top:1em;
    height: 5em;
    width:4em;
    background: #fff;
    position:relative;
    left:0.5em;
    box-shadow: rgb(215, 215, 215) 0px 2px 10px 0px;
    border-radius:0.5em;
    margin:1em 0 0 0.5em
}
.card img{
    height:1.5em;
    display:flex;
    margin:auto;
    top:1em;
    position:relative;
}
.NameLanches{
    font-size:0.4em;
    margin: 3em 0 0 0;
    text-align: center;
  
}
.hamburguerGramas{
    font-size: 0.3em;
    position: inherit;
    text-align: center;
  
}
.card h1{
    font-size:0.4em;
  
    text-align: center;
}

</style>