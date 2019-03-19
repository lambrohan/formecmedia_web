<template>
  <div id="container">
    <div class="overlay"></div>
    <h2 class="header">CLIENTS</h2>
    <div class="gallery">
      <div v-for="client in clients" v-bind:key="client.name" class="client-card">
        <img :src="client.icon" alt="">
        <p>{{client.name}}</p>
      </div>
    </div>
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
#container{
  position: relative;
  width: 100%;
  min-height: 105vh;
  background-image: url('../../assets/bg-client-showcase.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  box-sizing: border-box;
  z-index: 0;
   @include for-tablet-landscape-up{
     padding-top: 10px;
    }
  
  

  .overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.756);
    z-index: -1;
  }

  .header{
    width: 100%;
    text-align: center;
    font-weight: 900;
    letter-spacing: 0.75em;
    text-indent: 0.75em;
    background: linear-gradient(to bottom, #a5a5a5 44.17%, #fff 71.87%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
    @include for-tablet-landscape-up{
       font-size: 72px;
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
    @include for-tablet-landscape-up{
      padding: 0 161px 0 161px;
    }
    
  }

  .client-card{
    width: 180px;
    height: 180px;;
    z-index: 2;
    background: #00ffff31;
    position: relative;
    margin: 4px;
    overflow: hidden;

    img{
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      opacity: 0;
      transition: all 0.2s linear;
    }

    p{
      position: absolute;
      top:50%;
      transform: translateY(-50%);
      width: 100%;
      font-style: normal;
      text-transform: uppercase;
      color: white;
      font-weight: 500;
      font-size: 12px;
      text-align: center;
      letter-spacing: 0.19em;
      margin: 0;
      transition: all 0.1s linear;
    }
  }

  .client-card:hover{
    cursor: pointer;
    p{
      opacity: 0;
    }
    img{
      opacity: 1;
    }

  }
 
}
</style>


