<template>
  <div id="container">
    <div class="navTrigger" :class="{active:menuVisible}" @click="handleMenuClick">
      <i></i><i></i><i></i>
    </div>
    <div :class="{showMenu:menuVisible}" class="menu">
      <div :class="{showHomeButton:menuVisible}"  class="home-button">
        <img src="../assets/home-icon.png" alt="">
      </div>
      <div class="bg"></div>
      <div class="list">
        <h2>Social Media Marketing</h2>
        <h2>WEB DESIGN<br>&amp; DEVELOPMENT</h2>
        <h2>VIDEOGRAPHY</h2>
        <h2>APP DEVELOPMENT</h2>
      </div>
      <h4>9607888333</h4>
    </div>

  </div>
</template>
<script>
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
    handleMenuClick:function(){
      this.menuVisible = !this.menuVisible;
    }
  }
  
}
</script>
<style lang="scss" scoped>
@import '../styles/components/MenuButton';
#container{
  width:100%;
  top:0;
  z-index: 99;
  position: absolute;
  font-family: 'Poppins' sans-serif;
  
 
}
.menu{
  position: fixed;
  width: 100%;
  height:100vh;
  top:-100%;
  left:0;
  transition: all 0.4s 0.3s ease;

  .bg{
    width: 100%;
    height:100%;
    top:0;
    left: 0;
    position: absolute;;
    background: #00ffffef;
  }

  .list{
    max-width: 570px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    top: 150px;
    background: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   


    h2{
      margin:0 0 34px 0;
      padding:0;
      font-style: normal;
      font-weight: 900;
      font-size: 36px;
      line-height: 38px;
      letter-spacing: 0.32em;
      text-align: center;
      text-transform: uppercase;
      color: #00ffff;
      text-shadow: 0px 0px 2px black;
      transition: color 0.3s ease;

    }

    h2:hover{
      cursor: pointer;
      color:#000;
    }
  }

  h4{
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    color: #000;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.32em;
    }
  h4::before{
    content:"";
    background-image: url('../assets/phone-receiver.png');
    width: 20px;
    height:20px;
    position: absolute;
    left: -32px;
    top:2px;
    background-size: contain;
  }  
}

.showMenu{
  top:0;
}
.showHomeButton{
  left:16px;
}




</style>


