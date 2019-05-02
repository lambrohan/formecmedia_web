<template>
  <div id="vd-container">
    <h1 class="headline">Demo</h1>
    <div class="player-container">
      <div class="left">
      <video :poster="videos[currentlyPlaying].thumb" :src="videos[currentlyPlaying].url"  id="player" playsinline controls>
    </video>
    </div>
    <div class="right">
      <div v-for="(video,i) in videos" :key="video.title" @click="currentlyPlaying = i" class="list-item" :class="[{'active':i === currentlyPlaying},{'loading':i === loading}]">
        <h4>{{video.title}}</h4>
        <p>{{video.desc}}</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'VideoPlayer',
  data(){
    return{
      currentlyPlaying:0,
      loading:0,
      videos:[
        {
          title:'Rajakaka Portfolio Video',
          desc:'Adobe After Fx',
          url:'https://firebasestorage.googleapis.com/v0/b/music-c61ce.appspot.com/o/Formec%20Media%2FRajakaka%20Premium%20E-Store.mp4?alt=media&token=f4ba6de4-81d5-4347-a78f-7bc8bd5ba61f',
          thumb:'https://firebasestorage.googleapis.com/v0/b/music-c61ce.appspot.com/o/Formec%20Media%2FScreenshot%20(36).webp?alt=media&token=8deb8abb-fb63-4da0-862d-c50ec1a02d62'
        },
         {
          title:'Antique Collection Promo Video For Mahendra Jewellers',
          desc:'Adobe After Fx',
          url:'https://firebasestorage.googleapis.com/v0/b/music-c61ce.appspot.com/o/Formec%20Media%2FComp-2.webm?alt=media&token=c40732eb-e279-49bb-9d1d-545c7f8026aa'
        },
        {
          title:'Mahendra Jewellers Diwali Video',
          desc:'Adobe After Fx',
          url:'https://firebasestorage.googleapis.com/v0/b/music-c61ce.appspot.com/o/Formec%20Media%2Frender.mp4?alt=media&token=1dd52570-76d6-42b4-bd25-93ce9f290285',
          thumb:'https://firebasestorage.googleapis.com/v0/b/music-c61ce.appspot.com/o/Formec%20Media%2Fmahendra%20thumb.webp?alt=media&token=9b37b3b0-4199-4d87-b0ee-64f6d5e319a7'
        },
        
      ]
  }},

  mounted(){
  },
  methods:{
    initPlayer:function(){
     
    }
  }

}
</script>

<style lang="scss" scopped>


#vd-container{
  width: 100%;
  padding-bottom: 32px;

  ::-webkit-scrollbar {
  width: 8px;
  background-color: #242424;
  
  }
  ::-webkit-scrollbar-thumb {
  background-color: rgba(90, 90, 90, 0.8);  
  }

  video{
    outline: none;
  }


  .headline{
    color: white;
    font-size: 40px;
    display: block;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 60px;
  }

  .player-container{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    padding:0 200px;

    .left{
      width: 55%;
      

      #player{
      width: 100%;
      border: 1px solid rgb(29, 29, 29);
      padding: 8px;
      
      }

    }
    .right{
      width: 35%;
      color: white;
      overflow-y: scroll;
      max-height: 400px;
      padding: 0 16px;
      margin-left: 16px;

      .active::before{
        content: '';
        background-image: url('../assets/play-button.png');
        background-size: contain;
        width: 20px;
        height: 20px;
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        left:-8px;
        
      }

      @keyframes rotate {
        from{
          transform: rotate(0deg);
        }
        to{
          transform: rotate(360deg);
        }
      }

      .list-item{
        margin-bottom: 24px;
        transition: all 0.3s ease;
        box-sizing: border-box;
        padding: 8px 12px;
        position: relative;
        padding-left: 24px;

        h4,p{
          margin:0;
          letter-spacing: 0.09em;
        }

        h4{
          font-weight: normal;

        }
        p{
          font-weight: normal;
          font-size: 12px;
          color: #868686
        }
      }

      .list-item:hover{
        cursor: pointer;
        background: rgb(22, 22, 22);
      }
    }
  }
}

</style>
