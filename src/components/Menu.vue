<template>
  <div id="container">
    <div class="navTrigger" :class="{active:menuVisible}" @click="menuVisible = !menuVisible">
      <i></i><i></i><i></i>
    </div>
    <div v-if="menuVisible" class="menu">
      <div class="bg"></div>
    </div>

  </div>
</template>
<script>
import anime from 'animejs';
export default {
  name:"Menu",
  data(){
    return{
      menuVisible:false,
    }
  },
  mounted(){


  },
  methods:{
    
  }
  
}
</script>
<style lang="scss" scoped>
@import '../styles/components/MenuButton';
#container{
  width:100%;
  top:0;
  z-index: 100;
  position: absolute;
}
.menu{
  position: fixed;
  width: 100%;
  height:100vh;
  top:-100%;
  left:0;

  .bg{
    width: 100%;
    height:100%;
    top:0;
    left: 0;
    position: absolute;;
    background: #00ffff;
  }
}




</style>


