<template>
  <div id="tools-carousel">
    <h2>Tools We Use</h2>
    <carousel class="carousel" :autoplay="true" :per-page="8" :paginationEnabled="false" :mouse-drag="true">
      <slide class="slide" v-for="item in slides" :key="item.name">
        <img :src="item.img" alt="">
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name:'ToolsSlider',
  props:['slides'],
  components:{
    carousel:Carousel,
    slide:Slide
  },
  data(){
    return{
      
    }
  }
}
</script>

<style lang="scss" scopped>
#tools-carousel{
  width: 100%;
  background: rgb(255, 255, 255);
  padding-top: 1px;
  padding-bottom: 16px;

  h2{
    text-align: center;
    
  }
  .carousel{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .slide{
      img{
        box-sizing: border-box;
        padding:8px;
        max-height: 80px;
        object-fit: contain;
      }
    }
  }
}

</style>
