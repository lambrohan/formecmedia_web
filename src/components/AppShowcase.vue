<template>
  <div id="appshow" v-vpshow >
   <div class="img" v-bind:style="{ 'background-image': 'url(' + mock + ')' }" v-parallax="0.2"  ></div>
    <div class="info" v-parallax="0.5" :class="[{'play':animated}]">
      <h1><span>UI / UX</span></h1>
      <p>
        It is process of improving overall experience of users when they interact with application which indirectly provides
        customer satisfaction. By keeping user base in mind we first create skeleton of app. It mainly focuses on wireframing an application and structuring all its components and elements appropriately to create the user flow.
      </p>
    </div>
  </div>  
</template>

<script>
import inViewport from 'vue-in-viewport-mixin';

export default {
  data(){
    return{
      animated:false,
      mock:require('../assets/app/appmock1.png'),
    }
  },
  mounted(){
  },
  mixins:[inViewport],
  watch:{
    'inViewport.now': function(visible) {
        
      if(!this.animated && visible){
        this.animated = true;
      }
           
    }
  
  }

}
</script>

<style  lang="scss">
.before-enter {
  opacity: 0;
}

.enter {
  transition: opacity 2s ease;  
}
#appshow{
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-size: cover;

  .img{
    min-width: 400px;
    height: 700px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    display: block;
    margin: 0 auto;
    position: absolute;
    left:50%;
    transition: all 0.5s ease;
    overflow: hidden;
  }
  .info{
    color: white;
    width: 40%;
    position: absolute;
    bottom:25%;
    text-align: center;
    @include for-desktop-up{
      padding: 48px;
    }
    h1{
      font-size: 50px;
      height: 80px;
      overflow: hidden;
      margin:0;
      position: relative;
      display: block;
      

      span{
        transform: translateY(100px);
        position: absolute;
        transition: 0.5s 1s all ease;
        right: 0;       
      }
      
    }

    p{
      position: relative;
      font-size: 14px;
      overflow: hidden;
      width: 100%;
      opacity: 0;
      transition: 0.5s 1.5s all ease;
      text-align: justify;
      text-justify: newspaper;
    }
  }

  .play{
    h1 span{
      transform: translateY(0);
    }

    p{
      opacity: 1;
    }
  }
}
</style>
