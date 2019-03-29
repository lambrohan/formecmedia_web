<template>
  <div id="container">
    <div class="left cs-flex">
      <div v-for="cs in caseStudiesLeft" v-bind:key="cs.title" class="cs-block">
        <div class="overlay"></div>
        <div class="info">
          <h4>{{cs.title}}</h4>
          <p>{{cs.info}}</p>
        </div>
        <img :src="cs.image" alt="">
       
      </div>
    </div>
    <div class="center">
      <h3 style="color:#fff">CASE</h3>
      <h3 style="color:#00ffff">STUDY</h3>
    </div>
    <div class="right cs-flex">
       <div v-for="cs in caseStudiesRight" v-bind:key="cs.title" class="cs-block">
        <div class="overlay"></div>
        <img :src="cs.image" alt="">
        <div class="info">
          <h4>{{cs.title}}</h4>
          <p>{{cs.info}}</p>
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
      caseStudiesLeft:[
        {image:'http://placekitten.com/g/300/200',title:"GNJ & Sons",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam vel quam elementum pulvinar etiam non."},
        {image:'http://placekitten.com/g/300/200',title:"GNJ & Sons",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam vel quam elementum pulvinar etiam non."},
        {image:'http://placekitten.com/g/300/200',title:"GNJ & Sons",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam vel quam elementum pulvinar etiam non."},
            
      ],
      caseStudiesRight:[
        {image:'http://placekitten.com/g/300/200',title:"Mahendra Jewellers",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam vel quam elementum pulvinar etiam non."},
        {image:'http://placekitten.com/g/300/200',title:"Mahendra Jewellers",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam vel quam elementum pulvinar etiam non."},
        {image:'http://placekitten.com/g/300/200',title:"Mahendra Jewellers",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam vel quam elementum pulvinar etiam non."},
      ]
    }
  }
  
}
</script>
<style lang="scss" scoped>
@import '../../styles/components/CaseStudy';
#container{
  width:100%;
  position: relative;
  height:100vh;
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  flex-wrap: nowrap;

  .cs-flex{
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;

  }

  .left{
    width: 40%;
    h4,p{
      text-align: right;
    }

    h4::after,.overlay{
      right:0;
    }
   
  

  }
  .right{
    width: 40%;
    h4,p{
      text-align: left;
    }
    h4::after,.overlay{
      left:0;
    }
    
  }

  .center{
    height: 100%;
    width: 20%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
      writing-mode: vertical-rl;
      text-orientation: upright;
      margin: 0;
      font-style: normal;
      font-weight: 900;
      font-size: 20px;
      @include for-tablet-landscape-up{
        font-size: 46px;
      }
    }


  }
}

.left{
  .info{
    transform: translateX(-500px);
    
  }
}
.right{
  .info{
    transform: translateX(500px);
  }
}

.left .cs-block:hover{
  .overlay{
    width: 100%;
  }
  .info{
    transform: translateX(0);
    opacity: 1;
  }
}

.right .cs-block:hover{
  .overlay{
    width: 100%;
  }
  .info{
    transform: translateX(0);
    opacity: 1;
  }
}

</style>


