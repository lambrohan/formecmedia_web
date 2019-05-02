<template>
  <div id="vid-container">
    <PageIntro bg="#000" title="videography"/>
    <Process v-bind:processList="processList"/>
    <VideoPlayer/>
    <ToolsSlider v-bind:slides="slides"/>
    <Footer/>
  </div>
</template>

<script>
import PageIntro from '@/components/PageIntro';
import Process from '@/components/process/Process';
import VideoPlayer from '@/components/VideoPlayer';
import ToolsSlider from '@/components/ToolsSlider';
import Footer from '@/components/Footer';
export default {
  name:'VideoView',
  components:{
    PageIntro,
    Process,
    VideoPlayer,
    ToolsSlider,
    Footer
  },data(){
    return{
       processList:[
        {
          title:"UNDERSTANDING THE REQUIREMENT",
          body : "The first ever step is to get on social media or having access to all of your current accounts. and making sure that everything is tied to your website."
        },
        {
          title:"WRITING A SCRIPT & GETTING VOICEOVER",
          body : "In this phase, your campaign will be built into your new advertising account. using the techniques & guidelines that we have perfected, our team will build your campaign based on your budget & taget audience."
        },
        {
          title:"STORYBOARDING & ANIMATING",
          body : "During this phase we can post  interact using strategies like contests, coupons and more.",
        },
         {
          title:"FINAL RENDER",
          body : "CONGRATULATIONS! Now your social media plan is in place. You will work closely with our social media team to get best possible results.",
          last:true
        },  
      ],
      slides:[
        {
          img:require("../assets/video/ps.jpg"),
          name:"Vue.js"
        },
        {
          img:require("../assets/video/ae.jpg"),
          name:'AE'
        },
        {
          img:'https://upload.wikimedia.org/wikipedia/en/d/d8/C4D_Logo.png',
          name:'Cinema4D'
        },
        {
          img:require("../assets/video/ai.jpg"),
          name:'AI'
        },
        {
          img:require("../assets/video/behance.png"),
          name:"Google Cloud"
        },
        {
          img:'https://pbs.twimg.com/profile_images/988810196502827008/hkz6WNCM_400x400.jpg',
          name:'Node'
        },
        {
          img:require("../assets/video/dribble.svg"),
          name:'Firebase'
        },
        {
          img:'https://www.videocopilot.net/assets/public/images/v7/template/header-logo.jpg',
          name:'Heroku'
        },
        

      ]
    }
  },mounted(){
    this.$store.commit('setMenuColor','color-video');
    window.scrollTo(0,0);
  }
  }
</script>

<style lang="scss">
#vid-container{
  width: 100%;
  position: relative;
  background: #000;
}
#player{
  width: 550px;
}
</style>
