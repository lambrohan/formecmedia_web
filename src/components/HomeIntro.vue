<template>
  <div id="home-intro" v-bind:style="{ 'background-image': 'url(' + bgImages[currentBg] + ')' }">
    <div class="gradient"></div>
    <h4>Formec Media</h4>
    <h1>A <br> Digital Marketing Company</h1>
  </div>
</template>

<script>
import { setInterval } from 'timers';
export default {
  name:"HomeIntro",
  components:{
  },
  data(){
    return{
      currentBg:0,
      bgImages:[
        require('../assets/home_bg/1.png'),
        require('../assets/home_bg/2.png'),
        require('../assets/home_bg/3.png'),
        require('../assets/home_bg/4.png'),
      ]
    }
  },
  created(){
    const i = setInterval(this.changeBg,300);
  },
  methods:{
    changeBg:function (){
      this.currentBg == this.bgImages.length-1 ? this.currentBg = 0 : this.currentBg++
    }
  }
  
}
</script>
<style lang="scss" scoped>
#home-intro{
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  transition: background 200ms ease;
  

  h4{
    position: absolute;
    top:4rem;
    left: 50%;
    transform: translateX(-50%);
    font-style: normal;
    font-weight: 900;
    line-height: 15px;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.69em;
    color: black;
  }
  h1{
    width: 686px;
    position: absolute;
    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    line-height: 101px;
    font-size: 96px;
    text-align: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: center;
    top:10%;
    left:50%;
    transform: translateX(-50%);
  }
}
.gradient{
  position: absolute;
  width: 100%;
  height: 100vh;
  // z-index: 100;
  background: linear-gradient(180deg, rgba(0, 255, 255, 0.9) 0%,
    rgba(0, 255, 255, 0.9) 34.45%, rgba(0, 255, 255, 0.225) 72.12%,
    rgba(0, 255, 255, 0) 93.88%);
}

</style>


