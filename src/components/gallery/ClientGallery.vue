<template>
  <div id="g-container">
    <div class="overlay"></div>
    <div class="gallery">
      <div v-for="item in clients" :key="item.name" class="card">
        <img :src="item.icon" :alt="item.name">
      </div>
    </div>
    <p class="heading1">CLIENTS</p>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name:'ClientGallery',
  data(){
    return{
      clients:store.getters.getClientList,
    }
  },
  mounted(){
    
  }
}
</script>

<style lang="scss" scoped>
#g-container{
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background:#151515;
  padding-top: 1px;
  padding-bottom: 1px;
   
  
  .precursor-shape{
    position: absolute;

  }


  // .overlay{
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   background: rgba(0, 0, 0, 0.756);
  //   z-index: -1;
  // }

  .precursor-shape{
    background: url('../../assets/precursor-shape.png');
    
  }

  .heading1{
    padding: 0;
    font-weight: 900;
    letter-spacing: 0.17em;
    color: #1D1D1D;
    margin:0;
    line-height: 100px;
    margin-left: 32px;
    vertical-align: text-bottom;
    font-size: 100px;
    @include for-tablet-landscape-up{
       font-size: 144px;
       
    }
  }

  .gallery{
    width:100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 2;
    align-items: center;
    justify-content: center;
    padding: 0 100px;
    box-sizing: border-box;

    .card{
      margin:0 30px;
      justify-content: center;
      align-items: center;
      img{
        width: 105px;
        height: 105px;
        object-fit: contain;
        filter: grayscale(1);
        transition: all 0.2s ease-in;

      }
    }

    .card:hover{
      img{
        filter: grayscale(0);
      }
    }
  }

 
}

</style>


