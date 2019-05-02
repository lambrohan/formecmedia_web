<template>
  <div id="smm">
    <div class="intro">
      <div class="overlay"></div>
      <h4>Formec Media</h4>
      <h1>SOCIAL MEDIA MARKETING</h1>
    </div>
    <ProcessComponent v-bind:processList="processList"></ProcessComponent>
    <div class="step1" v-vpshow >
     <div class="left" v-parallax="0.3" >
        <h2>STEP 01</h2>
      <h1>We Study Your Business</h1>
      <p> Lorem ips2um dolor sit amet consectetur adipisicing elit. Exercitationem excepturi quam eligendi nihil? Ex quos voluptatum harum reprehenderit consequuntur ducimus, tempore esse beatae dolore perferendis officia magnam, illo maxime labore sint doloribus fugit optio accusamus laboriosam odit distinctio maiores, obcaecati doloremque autem. Sit possimus velit voluptatum! Assumenda, voluptatem harum ipsum a modi, corporis delectus pariatur minus facilis officia doloremque totam. </p>
     </div>
     <div class="right" >
       <img src="../assets/smm/step1.svg" v-parallax="0.2" alt="">
     </div>
    </div>

    <div class="step2" v-vpshow >
     <div class="left" >
       <img src="../assets/smm/step21.svg" v-parallax="0.1" alt="">
     </div>
     <div class="right" v-parallax="0.3" >
        <h2>STEP 02</h2>
      <h1>Know your consumer</h1>
      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ex possimus voluptate laudantium, perspiciatis dolores repudiandae et tempora saepe consequatur ducimus cumque maxime aut est explicabo assumenda nesciunt quibusdam sunt! </p>
     </div>
    </div>

    <div class="step3" v-vpshow >
     <div class="left" v-parallax="0.3" >
        <h2>STEP 03</h2>
      <h1>Build Content Strategy</h1>
      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos fugit consequuntur adipisci qui nostrum culpa minus dolorem consequatur atque fugiat exercitationem provident excepturi, porro soluta. Velit laboriosam dolore nihil obcaecati recusandae et suscipit optio, sit amet! Sit reprehenderit voluptatum quae. </p>
     </div>
     <div class="right" >
       <img src="../assets/smm/build.svg" v-parallax="0.2" alt="">
     </div>
    </div>

    <div class="step2" v-vpshow >
     <div class="left" >
       <img src="../assets/smm/strate.svg" v-parallax="0.1" alt="">
     </div>
     <div class="right" v-parallax="0.3" >
        <h2>STEP 04</h2>
      <h1>Develope Social Media Plan</h1>
      <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt nobis, porro vero magnam dicta rerum voluptatibus eius officiis, nihil neque, dolores quo molestias amet deserunt! </p>
     </div>
    </div>

    <div class="step3" v-vpshow >
     <div class="left" v-parallax="0.3" >
        <h2>STEP 05</h2>
      <h1>Measure &amp; Fine Tune</h1>
      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos fugit consequuntur adipisci qui nostrum culpa minus dolorem consequatur atque fugiat exercitationem provident excepturi, porro soluta. Velit laboriosam dolore nihil obcaecati recusandae et suscipit optio, sit amet! Sit reprehenderit voluptatum quae. </p>
     </div>
     <div class="right" >
       <img src="../assets/smm/last.svg" v-parallax="0.2" alt="">
     </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import ProcessComponent from '@/components/process/Process.vue';
import Footer from '@/components/Footer';
export default {
  name:'SocailMediaMarketing',
  components:{
    ProcessComponent,
    Footer
  },
  data(){
    return{
      processList:[
        {
          title:"GETTING SOCIAL",
          body : "The first ever step is to get on social media or having access to all of your current accounts. and making sure that everything is tied to your website."
        },
        {
          title:"CAMPAIGN BUILD, TARGETING",
          body : "In this phase, your campaign will be built into your new advertising account. using the techniques & guidelines that we have perfected, our team will build your campaign based on your budget & taget audience."
        },
        {
          title:"ENGAGEMENT & SCHEDULING",
          body : "During this phase we can post  interact using strategies like contests, coupons and more.",
        },
         {
          title:"LEAD GENERATION",
          body : "CONGRATULATIONS! Now your social media plan is in place. You will work closely with our social media team to get best possible results.",
          last:true
        },
       
       
     
      ]
    }
  },
  mounted(){
    this.$store.commit('setMenuColor','color-smm');
    window.scrollTo(0,0);
  }
}
</script>

<style lang="scss" scoped>
.enter{
  transition: 0.1 ease all;
}
h4,h1{
  margin:0;
  padding:0;
}
#smm{
  position: relative;
  width: 100%;
  background: #000;
  position: relative;
  background-image: url('../assets/smm/smmbg.jpg');

  .step3{
    width: 100%;
    display: flex;
    color: white;
    padding: 16px;
    margin-top: 80px;

    .left{
      width: 60%;
      padding-left: 36px;
      @include for-desktop-up{
        margin-top: 64px;
      }
      
      h2{
        font-weight: normal;
        letter-spacing: 0.1em;
        background: rgb(65, 65, 65);
        display: inline;
        padding: 0 4px;
      }

      h1{
        font-size: 40px;
        margin-top: 24px;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 8px;
      }
      p{
        max-width: 80%;
        margin:0;
      }
    }
    .right{
      width: 40%;
      img{
        opacity: 0.9;
      }
    }
  }

  
}

@import '../styles/SMM';


</style>
