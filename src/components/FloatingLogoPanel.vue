<template>
  <div id="logopanel">
    <i class="fa fa-youtube-play" aria-hidden="true"></i>
    <i class="fa fa-instagram" aria-hidden="true"></i>
    <i class="fa fa-facebook" aria-hidden="true"></i>
    <div class="f-logo"></div>
  </div>
</template>

<script>
import anime from 'animejs';
export default {
  name:"FloatingSideBar",
  mounted(){
    var tl = anime.timeline({
      autoplay:true,
    });
    tl.add({
      targets:'i',
      opacity:1,
      translateY:0,
      delay: anime.stagger(500,{direction:'reverse'})
    })
  }

}
</script>

<style lang="scss" scopped>
#logopanel{
  position: fixed;
  bottom: 10%;
  padding:12px 8px;
  z-index: 1000;
  width: 45px;
  background: #212121;
  overflow: hidden;
  left:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .f-logo{
    width: 35px;
    background: url('../assets/ssss.png');
    height: 35px;
    background-size: contain;
    margin-top: 8px;
  }

  i{
    width: 50px;
    color: white;
    text-align: center;
    margin: 8px 0;    
    transition: 0.3s ease all;
    cursor: pointer;
    opacity: 0;
    transform: translateY(200px);
  }

  i:hover{
    color: #00ffff;
  }
  
}
</style>
