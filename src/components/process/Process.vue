<template>
  <div id="container">
    <h2>The Process</h2>
    <div class="wrapper">
      
      <div v-for="(item,index) in processList" v-bind:key="item.title" class="process-item ">
        <div class="rect" :class="{'rect-left':isEven(index), 'rect-right':!isEven(index)}">
          <div v-if="!item.last && index!=0" class="connector"></div>
        </div>
        <div class="text-area" :class="{'order-first':!isEven(index)}">
          <h4>{{item.title}}</h4>
          <p>{{item.body}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'processComponent',
  props:['processList'],
  data(){
    return{
      
    }
  },
  methods:{
    isEven:(n)=>{
      return n % 2 == 0;
    }
  }
}
</script>
<style lang="scss" scoped>
#container{
  width: 100%;
  position: relative;

}
h2{
    color: white;
    font-style: normal;
    font-weight: 900;
    font-size: 64px;
    line-height: 67px;
    text-align: center;
    letter-spacing: 0.31em;
    text-transform: uppercase;
  }

  h4{
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 25px;
    letter-spacing: 0.31em;
    margin:0;
    padding:0;

  }

  p{
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 15px;
    letter-spacing: 0.06em;
    opacity: 0.85;
    max-width: 500px;
  }

  .wrapper{
    max-width: 60%;
    margin: 100px auto 0 auto;
    padding-bottom: 100px;

    .process-item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      @include for-tablet-portrait-up {
        margin-bottom: 121px;
      }
      
      .rect{
        width: 40%;
        height: 187px;
        border: 10px solid #5200FF;
        background: #232323;
        box-sizing: border-box;
        border-radius: 41px;
        position: relative;
        z-index: 200;
        box-sizing: border-box;
      }
    
      .text-area{
        width: 40%;
        color:white;
        text-align: left;
      }
    }

    
    
  }

  .order-first{
    order: -1;
  }

  .rect-left::after{
    content: "";
    position: absolute;
    height: 116%;
    width: 25%;
    right:-27%;
    border-right: 5px dashed #5200FF;
    border-top: 5px dashed #5200FF;
    border-top-right-radius: 41px;
    top:70%;     
    box-sizing: border-box;
  }
  .rect-left::before{
    content:"";
    position: absolute;
    width: 31px;
    height: 31px;
    right:-50px;
    top:71%;
    background: #000;
    z-index: 10;
    transform: translateY(-50%);
    border: 10px solid #5200FF;
    border-radius: 50%;
    box-sizing: border-box;
  }

  // RECT RIGHT

  .rect-right::after{
    box-sizing: border-box;
    content: "";
    position: absolute;
    width:30%;
    left:-33%;
    height:25%;
    border-bottom: 5px dashed #5200FF;
    border-left: 5px dashed #5200FF;
    top:5%;
    border-bottom-left-radius: 41px;  
    
  }
  .rect-right::before{
    content:"";
    position: absolute;
    width: 31px;
    height: 31px;
    left:-52px;
    top: 29%;
    background: #000;
    z-index: 10;
    transform: translateY(-50%);
    border: 10px solid #5200FF;
    border-radius: 50%;
    box-sizing: border-box;
  }

  .rect-right .connector{
    position: absolute;
    width: 31%;
    left:-31%;
    height:28%;
    border-top: 5px dashed #5200FF;
    border-left: 5px dashed #5200FF;
    bottom:5%;
    border-top-left-radius: 41px;  
    box-sizing: border-box;
  }

  .rect-left .connector{
    position: absolute;
    width: 29%;
    height: 125%;
    border-bottom: 5px dashed #5200FF;
    border-right: 5px dashed #5200FF;
    top:-95%;
    box-sizing: border-box;
    border-bottom-right-radius: 41px;
    right:-29%;
  }
  .rect-left .connector::after{
    content: "";
    position: absolute;
    width: 31px;
    height: 31px;
    bottom: -18px;
    left: 16%;
    background: #000;
    z-index: 10;
    border: 10px solid #5200FF;
    border-radius: 50%;
    box-sizing: border-box;
  }

  .rect-right .connector::after{
    content: "";
    position: absolute;
    width: 31px;
    height: 31px;
    background: #000;
    z-index: 10;
    border: 10px solid #5200FF;
    border-radius: 50%;
    box-sizing: border-box;
    right:20%;
    top: -18px;
  }


</style>


