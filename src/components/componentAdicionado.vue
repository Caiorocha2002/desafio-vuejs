<template>
    <p id="custoLanche"></p>
</template>
<script>
import App from './components/App.vue';

export default{
    
name:"totalBase", 
components:{
    App
},
data(){
Hamburguer:[
    
]
}
};

const elementPreco = document.getElementById('idCard');
const elementvalor= document.getElementById('preco').value;
const elementCusto = document.getElementById('custoLanche');
if(elementPreco.checked == true){

   elementCusto.innerHTML= elementCusto.innerHTML= elementvalor;
};
</script>