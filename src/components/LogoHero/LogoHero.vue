<template  :in-viewport-root-margin='-50% 0%' >
  <div id="logo-hero"  >
    <img class="precursor-shape" v-parallax="0.5" src="../../assets/precursor-shape.png">
   <!-- DIGITAL MKTING -->
    <div class="logo"></div>
    <div class="d-m">
      <router-link to="/smm"><h4>Digital Marketing</h4></router-link>
      <div class="left"></div>
      <div class="right"></div>
      <div class="dot"></div>
    </div>
    <!-- APP DEVELOPMENT -->
    <div class="app-dev">
     <router-link to="/app"><h4>App Development</h4></router-link> 
     <div class="left"></div>
     <div class="right"></div>
     <div class="dot"></div>
    </div>
    <!-- WEB DESIGN -->
    <div class="web-dev">
    <router-link to="/web"><h4>Web Design &amp; Development</h4></router-link>
     <div class="left"></div>
     <div class="right"></div>
     <div class="dot"></div>
    </div>
     <!-- VIDEOGRAPHY -->
    <div class="videography">
    <router-link to="/video"><h4>VIDEOGRAPHY</h4></router-link>
     <div class="left"></div>
     <div class="right"></div>
     <div class="dot"></div>
    </div>


  </div>
  
</template>
<script>
import playAnim from './anim';
import inViewport from 'vue-in-viewport-mixin';

export default {
  name:'LogoHero',
  data(){
    return {
      animated:false,
    }
  },
  mounted(){  
  },

  methods:{
    
    //animate
   
  },
  mixins:[inViewport],
  watch:{
    'inViewport.now': function(visible) {
        
      if(!this.animated && visible){
        playAnim();
        this.animated = true;
        
      }
      
      
    }
  
  }


}
</script>

<style lang="scss" scopped>
@import '../../styles/components/LogoHero';


#logo-hero{
  background-color: #000;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 80vh;
  z-index: 10;

  .precursor-shape{
    position: absolute;
    right:30%;
    top:0;
    width: 230px;
  }
  h4{
    margin: 0 0 0 8px;
    padding: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #00ffff;
    text-transform: uppercase;
    letter-spacing: 0.31em;
    z-index: 10;
  }

  .logo{
    width: 300px;
    height: 300px;
    position: absolute;
    top:50%;
    left:50%;
    background-image: url('../../assets/ssss.png');
    background-size: cover;
    background-position: center;
    transform: translate(-50%, -50%);
  }
  



}

</style>