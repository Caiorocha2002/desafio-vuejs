<template>
  <header>

    <div class="headerTopo">
      <img src="../src/assets/logo.jpeg" alt=""> <h1 class="titulo">FastFood</h1>
    </div>
  </header>
  <main>
    <h1 class="title--SejaBemVindo">Seja bem vindo!</h1>
      <input   class="imput--OQVcProcura" placeholder="O que você procura?" type="text">
   
      <h1 class="categorias">Categorias</h1>
      <p class="categoriasP">Navegue por categorias</p>
<div class="containerSmash">
  <ComponentCard/>
  <ComponentCard/>
  <ComponentCard/>
  <ComponentCard/>
  <ComponentCard/>
  <ComponentCard/>
  </div>

  <div class="viaProduto">
    <p class="pedidoSelecionado"  >
      pedido Selecionado <br>
    

    </p>
<h1 v-for="(produto, index) in produtos" v-bind:key="index">
{{produto.name}}
</h1>
  <div class="line"></div>
  <h1>
    total do pedido
  </h1> 

  <button @click="notaFiscal" class="total"  v-for="(produto, index) in produtos" v-bind:key="index">
   {{ produto.preco}}

  
  </button>


  </div>
  </main>
</template>

<script>
import ComponentCard from './components/cartoes.vue';

export default{
  name:"App",
components:{
 ComponentCard,
},
data() {
   return{
      produtos:[
         {name:'smash', preco:'20:00',}
     ]
   }
   },
 methods:{
   notaFiscal(){
         this.produtos.name
   }
 },

};

</script>

<style >

body{
  margin:0;
}
.headerTopo{
  margin: 0;
  height: 2.5em;
  background:   #9ffe60;
  
}
.headerTopo img{
  height: 2em;
  top: 0.5em;
  position: absolute;

}
 .titulo{
  font-size: 0.7em;
  margin: 0;
  
  position: absolute;
  left: 3em;
  top: 2.3em;
}
.title--SejaBemVindo{
  font-size: 1em;
  margin: 1em 0 0 1em;
}
.imput--OQVcProcura{
  font-size: 0.7em;
  margin: 0 0 0 1em;
  width:10em;
}
.categorias{
  font-size: 1em;
position: relative;
top: 1em;
left: 1em;
}
.categoriasP{
  font-size: 0.6em;
  position:relative;
  left:1.5em;
  margin:1.5em 0 0 0;
}
.containerSmash{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
}
.viaProduto{
height:7em;
border:solid 0.1em;
border-color: rgb(187, 183, 183);
margin:  2em 1em;
top: 1em;
border-radius: 0.3em;

z-index:0;
}
.pedidoSelecionado{
  font-size:0.6em;
  left:1em;
  position:relative;
}
.line{
border-top: solid 0.1em;
border-color:  rgb(187, 183, 183);
position:relative;
top: 0.5em;
width:90%;
display:grid;
margin:0 auto;

}
.viaProduto h1{
  position:relative;
top: 1em;
  font-size:0.6em;
  left:1em;
 
}
.total{
  position:relative;
  left:1em;
 
}

</style>