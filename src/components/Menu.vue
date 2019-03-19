<template>
  <div id="container">
    <div class="ham-icon" :class="{menuButtonActive:menuVisible,menuButtonInactive:!menuVisible}" @click="menuVisible = !menuVisible" @mouseenter="menuButtonMouseEnter" @mouseleave="menuButtonMouseLeave">
      <div class="top"></div>
      <div class="middle"></div>
      <div class="bottom"></div>
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

   
    menuButtonMouseEnter:function(){
      anime({
        targets:'.ham-icon div',
        margin:'6px 0',
        duration:10,
        ease:'easeInOutExpo',
      })

    },
 
    menuButtonMouseLeave:function(){
       anime({
        targets:'.ham-icon div',
        margin:'4.1px 0',
        duration:10,
        ease:'easeInOutExpo'
      })
      
    }
    
  }
  
}
</script>
<style lang="scss" scoped>
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

.ham-icon{
  position:fixed;
  background: rgba(0, 255, 255, 0.877);
  top:2rem;
  right:2rem;
  width:52px;
  height:52px;
  border-radius: 4px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div{
    position: auto;
    margin: 4px 0;
    width: 60%;
    height:4px;
    background: #000;
    border-radius: 20px;
    transition: all 0.2s linear;
  }
}

.ham-icon:hover{
  cursor: pointer;
}

.menuButtonActive{
  div{
    position: absolute;
    margin:0 0;
    background: red;
  }

}
.menuButtonInactive{
  div{
    position: absolute;
    margin:0 0;
  }

}
</style>


