<template>
  <div id="team" >
    <!-- <div class="gif"  v-bind:style="{ 'background-image': 'url(' + cards[currentBg].bg + ')' }"></div> -->
   <div class="vid">
      <video class="gif" autoplay muted loop :src="cards[currentBg].bg"></video>
      <video class="gif" autoplay muted loop :src="cards[currentBg].bg"></video>
      <video class="gif" autoplay muted loop :src="cards[currentBg].bg"></video>
   </div>
    <h1> THE TEAM </h1>
   <div class="teamgif">
      <div class="mid">
        <p v-for="(card,index) in cards" :key="card.name" @mouseenter="currentBg = index" @mouseleave="currentBg = 4" >{{card.name}} </p>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name:'TheTeam',
  data(){
    return{
      loading:false,
      currentBg:4,
      cards:[
        {
          name:'Bhushan Redekar',
          designation:'Co-founder',
          bg:require('../assets/team/man.mp4')
          
        },
        {
          name:'Piyush Shaha',
          designation:'Co-founder',
          bg:require('../assets/team/piy.mp4')          
        },
        {
          name:'Santosh Patil',
          designation:'Co-founder',
          bg:require('../assets/team/san.mp4')
          
        },
        {
          name:'Rohan Lamb',
          designation:'Co-founder',
          bg:require('../assets/team/ro.mp4')
          
        },
        {
          bg:''
        }
      
      ]
    }
  }
}
</script>

<style lang="scss">
#team{
  width: 100%;
  position: relative;
  padding-top: 1px;
  padding-bottom: 1px;
  overflow: hidden;
  position: relative;
  height: 420px;

  .loading{
    border: 2px dotted #00ffff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    border-left: 1px solid transparent;
    top:50%;
    left:50%;
    animation: rotate 1s ease-in-out infinite;
  }

  @keyframes rotate {
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
    
  }
  .vid{
    width: 100%;
    display: flex;
    height: 100%;
    position: absolute;
    filter: opacity(0.2) grayscale(0.8);
  }
  .gif{
    width: 33%;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 90;
    object-position: center;
    
  }

  

  h1{
    width: 100%;
    text-align: center;
    font-weight: 900;
    letter-spacing: 0.75em;
    z-index: 100 !important;
    text-indent: 0.75em;  
    margin:0;
    box-sizing: border-box; 
    background: linear-gradient(to bottom, #00ffff 44.17%, rgb(26, 26, 26) 71.87%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
    @include for-tablet-landscape-up{
       font-size: 72px;
       margin-top: 32px;
    }
  }
.teamgif{
  width: 100%;
  display: flex;
  margin-bottom: 32px;
  

  .mid{
    color: #00ffff;
    text-align: center;
    font-size: 20px;
    z-index: 100 !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 32px;

    p{
      transition: 0.2s all ease;
      font-weight: 100;
      text-transform: uppercase;
      letter-spacing: 0.4em;
      display: inline;
      margin:8px 0;
      
    }

    p:hover{
      font-size: 22px;
      cursor: pointer;
      font-weight: 400;
    }
  }
}
}
</style>
