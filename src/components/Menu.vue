<template>
  <div id="container">
    <div class="navTrigger" :class="[getColorForMenu(),{active:menuVisible}]" @click="handleMenuClick" >
      <i></i><i></i><i></i>
    </div>
    <div :class="{showMenu:menuVisible}" class="menu">
      <div :class="[getColorForMenu(),{showHomeButton:menuVisible}]"  class="home-button">
        <router-link to="/"><img @click="handleMenuClick" src="../assets/home-icon.png" alt=""></router-link>
      </div>
      <div :class="[getMenuBg()]" class="bg"></div>
      <div class="list" :class="[`${menuColor}`]">
        <h2 @click="handleMenuClick"> <router-link to="/smm">Social Media Marketing</router-link> </h2>
        <h2 @click="handleMenuClick" > <router-link to='/web'>WEB DESIGN<br>&amp; DEVELOPMENT</router-link> </h2>
        <h2 @click="handleMenuClick"> <router-link to='/video'>VIDEOGRAPHY</router-link></h2>
        <h2 @click="handleMenuClick"> <router-link to='/app'>APP DEVELOPMENT</router-link></h2>
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
      menuColor:'',
    }
  },
  mounted(){
    console.log("MOUNTED")
    
    this.$store.watch(()=>{
      return this.$store.state.menuColor
    },
    (newColor)=>{
      this.menuColor = newColor;
      
    })


  },
  methods:{
    handleMenuClick:function(){
      this.menuVisible = !this.menuVisible;
    },
    getColorForMenu:function(){
      if(this.menuColor === 'color-home'){
        return `menu-home`
      }else if(this.menuColor === 'color-smm'){
        return 'menu-smm'
      }else if(this.menuColor === 'color-video'){
        return 'menu-video'
      }
      else if(this.menuColor === 'color-web'){
        return 'menu-web'
      }
      else if(this.menuColor === 'color-app'){
        return 'menu-app'
      }
    },
    getMenuBg:function (){
      return this.menuColor;
    }
  }
  
}
</script>
<style lang="scss" scoped>
@import '../styles/components/MenuButton';
#container{
  width:100%;
  top:0;
  z-index: 1000;
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
    position: absolute;
    transition: background 0.7s  ease;
    
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
  right:0;
}

.color-home{
  background: #00ffffef;
  color: #00ffffef;
}
.color-smm{
  background: rgba(81, 0, 255, 0.897);
  color: rgb(81, 0, 255);
}

.color-video{
  background: rgba(255, 255, 255, 0.897);
  color: rgb(255, 255, 255);
}
.color-app{
  background: #21B939;
  color: #21B939;
}
.color-web{
  background: #FF0099;
  color: #FF0099;
}


// MENU DYNAMIC

.menu-home{
  background: #96FFFF;
}

.menu-smm{
  background: rgba(78, 96, 255, 0.85);
}

.menu-web{
  background: #FF53BA;
}

.menu-video{
  background: rgba(255, 255, 255, 0.897);
}

.menu-app{
  background: #4FD965;
}



</style>


