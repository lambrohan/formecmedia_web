<template>
  <div id="csmod">
    <img class="precursor-shape" v-parallax="0.5" src="../../assets/precursor-shape.png">
    <img class="bottom" v-parallax="0.3" src="../../assets/precursor-shape.png">
    <div class=" slide-btn left" @click="slideIt('prev')">
      <div class="circle"></div>
    </div>
    <div class="slide-btn right" @click="slideIt('next')">
      <div class="circle"></div>
    </div>
    <div class="carousel">
      <div v-for="(item, index) in caseStudies" :key="item.img" class="carousel-item">
        <div class="left" :class="{'active':index === activeSlide}">
          <div class="content">
            <h2 class="title" :class="{'active':index === activeSlide}">{{`Case Study 0${index +1}`}}</h2>
            <h1 class="heading" :class="{'active':index === activeSlide}">{{item.heading}}</h1>
            <p class="info" :class="{'active':index === activeSlide}">{{item.info}}</p>           
          </div>
        </div>
        <div class="right " :class="{'active':index === activeSlide}">
          <img :src="item.img" alt="">
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"CaseStudy",
  data(){
    return{
      activeSlide:0
      ,
      caseStudies:[
        {
          heading:'Reaching 1.5+ Lakh people in a month',
          img:'https://i.pinimg.com/564x/f1/b4/57/f1b457783c5a2dad238da334f7d33b9f.jpg',
          info:`We ran a contest for a kids wear store in Kolhapur for branding purpose. 
            The number of people reached through this campaign crossed 1.5 lakh mark. 
            The page likes increased by 1164 organically & total engagement(likes, comments & shares) was more than 50,000 within a month.`
        },
         {
          heading:'100 leads in just 2 days',
          img:require('../../assets/cs2.jpeg'),
          info:'We carried out a lead generation campaign for a real estate project & received 118 enquiries within just 2 days.'
        },
         {
          heading:'Mannen',
          img:'https://i.pinimg.com/564x/39/43/67/394367ee4c55592f62da3c737f82b434.jpg',
          info:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
        }
      ]
    }
  },
  methods:{
    slideIt:function(type){
      if(type === 'prev'){
        this.activeSlide === 0 ? this.activeSlide = this.caseStudies.length-1 : this.activeSlide--
      }else{
        this.activeSlide === this.caseStudies.length-1 ? this.activeSlide = 0 : this.activeSlide++
      }
    }
  }
}
</script>

<style lang="scss">
#csmod{
  width: 100%;
  overflow: hidden;
  min-height: 630px;
  padding:0 100px;
  position: relative;

  .precursor-shape{
    position: absolute;
    width: 130px;
    top:30%;
    left:5%;
  }
  .bottom{
    position: absolute;
    bottom: 0;
    right: 10%;
    width: 140px;
  }
  .slide-btn{
    position: absolute;
    bottom: 20%;
    .circle{
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border:1px solid white;
      position: relative;
      transition: 0.1s all ease;
      background: rgba(0, 0, 0, 0.158);
    }

    .circle::after{
      content: '';
      width: 120px;
      height: 14px;
      background-size: cover;
      background-position: center;
      position: absolute;
      top:50%;
      transform: translate(-40%,-50%);

    }
    .circle::before{
      position: absolute;
      font-weight: 300;
      font-size: 10px;
      line-height: 10px;
      text-align: center;
      letter-spacing: 0.69em;
      color: #FFFFFF;

    }
  }

  .left{
    left:120px;
    .circle::after{
       background-image: url('../../assets/ic_arrow_long_left.png');
      }
    .circle::before{
      content: 'Prev';
      left:-50px;

    }
  }
   .right{
     right:120px;
     transform: rotate(180deg);
    .circle::after{
       background-image: url('../../assets/ic_arrow_long_left.png'); 
       }
       .circle::before{
        content: 'Next';
        left:-55px;
        transform: rotate(-180deg);
      }
  }

  .slide-btn:hover{
    cursor: pointer;

    .circle{
      padding: 7px;
      box-sizing: border-box;
      box-shadow: 4px 3px 1px #00ffff;
    }

  }
  

  .carousel{
    width: 100%;
    position: relative;
    .carousel-item{
      display: flex;
      overflow: hidden;
      flex-direction: row;
      height: 500px;
      position: absolute;
      justify-content: space-around;
      margin:0 200px;
      background: rgb(24, 24, 24);


      .left{
        transition: 0.6s all ease-in-out;
        width: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index:1; 
        box-sizing: border-box;
        @include for-tablet-portrait-up{
          padding: 16px;
        }

        .content{
          color: #FFFFFF;          
        }

        .title{
           font-family: 'Open Sans', sans-serif;
            letter-spacing: 3px;
            font-size: 14px;
            text-transform: uppercase;
            margin: 0;
            font-weight: 700;
            transform: translateY(25%);
            opacity: 0;
            visibility: hidden;
            transition: 0.4s all ease-in-out;
        }

        .heading{
          margin: 15px 0 0 0;
          font-family: 'Poppins', sans-serif;
          font-size: 26px;
          letter-spacing: 3px;
          font-weight: 700;
          text-transform: capitalize;
          transform: translateY(25%);
          opacity: 0;
          visibility: hidden;
          transition: 0.6s 100ms all ease-in-out;
        }
        .info{
          max-width: 350px;
          transform: translateY(25%);
          opacity: 0;
          visibility: hidden;
          transition: 0.6s 200ms all ease-in-out;
          margin-top: 24px;
          font-family: 'Open Sans', sans-serif;
          font-size: 16px;
          line-height: 22px;
          margin-bottom: 35px;
        }
      }
      .right{
        z-index:1;
        transition: 0.6s all ease-in-out;
        visibility: hidden;
        width: 55%;
        height: 100%;
        opacity: 0;
        transform: translateX(100%);
        img{
          height: 100%;
          width: 100%;
          object-fit: contain;
          object-position: right;
        }
      }

      .active{
        visibility: visible !important;
        transform: translate(0, 0) !important;
        opacity: 1 !important;
      }

    }
  }

}

</style>
