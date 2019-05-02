<template>
  <div id="pcase">
    <div class="left">
      <h2>Modern Design</h2>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus suscipit, quos cumque facere laudantium. Itaque eligendi sed quod repellat molestiae neque nihil explicabo, sint maiores id, amet suscipit nemo.</p>
      <h2>Inspiration</h2>
      <div class="icons">
        <i class="fa fa-behance behance" aria-hidden="true"></i>
        <i class="fa fa-dribbble dribble" aria-hidden="true"></i>
        <i class="fa fa-medium medium" aria-hidden="true"></i>
      </div>
      <p class="last" >In the end the only thing that matters is crafting a superb <br> user experience and make sure that user enjoys surfing the website.
      </p>
    </div>
    <div class="right" v-bind:style="{ 'background-image': 'url(' + bgImages[currentBg] + ')' }">
      <div class="navigation">
        <i class="fa fa-long-arrow-left lf" aria-hidden="true" @click="slide('prev')"></i>
        <div class="midline"></div>
        <i class="fa fa-long-arrow-right rr" aria-hidden="true" @click="slide('next')"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentBg:0,
      bgImages:[
        require('../assets/web/kajawe1.jpg'),
        require('../assets/web/kajawe2.jpg'),
        require('../assets/web/mock1.jpg'),      
        require('../assets/web/umang.jpg'),
      ]
    }
  },
  methods:{
    slide:function(type){
       if(type === 'prev'){
         this.currentBg == 0 ? this.currentBg = this.bgImages.length-1 : this.currentBg--
       }else{
         this.currentBg == this.bgImages.length-1 ? this.currentBg = 0 : this.currentBg++
       }
    }
  }

}
</script>

<style lang="scss" scopped>
#pcase{
  width: 100%;
  position: relative;
  display: flex;
  height: 90vh;
  background: #ffffff;
  .left{
    width: 45%;
    text-align: center;
    // border: 10px solid #3d3d3d;
    // border-right-width: 0;
    // border-top-width: 0;
    padding:16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;

    .last{
      position: absolute;
      bottom: 0;
      padding:0 20px;
      font-size: 14px;
      
      
    }


    .icons{
      display: flex;
      width: 100%;
      justify-content: center;

      i{
        font-size: 30px;
        margin:0 8px;
      }
    }
    
    
  }
  .left::after{
    content:'';
    height: 60%;
    width: 1px;
    background: #000;
    position: absolute;
    right:-10px;


  }
  .right{
    width:60%;
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
    position: relative;
    transition: background 0.8s ease;
    box-sizing: border-box;

    .navigation{
      position: absolute;
      right:32px;
      bottom: 8px;
      display: flex;
      padding: 8px 4px;
      background: #00ffff;

      .midline{
        width: 1px;
        background: rgba(122, 122, 122, 0.514);
        margin:0 4px;
      }
      i{
        font-size: 22px;
        margin:0 8px;
        transition: all 0.2s linear;
      }

      i:hover{
        cursor: pointer;
      }

      .lf:hover{
        transform: translateX(-5px);
      }
      .rr:hover{
        transform: translateX(5px);
      }

      
      
    }
    
  }
}

.behance{
  color: #053eff;
}
.dribble{
  color: #ea4b88;
}
.medium{
  color: #03a87c;
}

</style>
