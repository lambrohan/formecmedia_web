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
  height: 100vh;
  background-image: url('../../assets/bg-client-showcase.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  box-sizing: border-box;

  .overlay{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.856);
    position: absolute;
    top:0;
    left:0;
    z-index: 1;
  }

  .header{
    position: absolute;
    left:50%;
    margin: 16px 0 0 0  ;
    text-align: center;
    font-weight: 900;
    font-size: 72px;
    letter-spacing: 0.75em;
    text-indent: 0.75em;
    transform: translateX(-50%);
    background: linear-gradient(to bottom, #a5a5a5 44.17%, #fff 71.87%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 2;
  }

  .gallery{
    width:100%;
    top: 22%;
    position: absolute;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 2;
    align-items: center;
    justify-content: center;
    padding: 0 161px 0 161px;
    
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


